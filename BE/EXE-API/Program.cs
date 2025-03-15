using AutoMapper;
using EXE_API;
using EXE_Bussiness.Service.CategoryService;
using EXE_Bussiness.Service.ImageService;
using EXE_Bussiness.Service.PostService;
using EXE_Bussiness.Service.SubCategoryService;
using EXE_Bussiness.Service.TokenService;
using EXE_Bussiness.Service.UserService;
using EXE_Bussiness.Service.VnPayService;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
		.AddJsonOptions(options =>
		{
			options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
		});
;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRouting(options => options.LowercaseUrls = true);

builder.Services.AddDbContext<AppDBContext>(options =>
{
	options.UseMySQL(builder.Configuration.GetConnectionString("DeployConnection"));
});

builder.Services.AddSingleton(new MapperConfiguration(config =>
{
	config.AddProfile(new MapperConfig());
}).CreateMapper());

builder.Services.AddIdentity<User, Role>(options =>
{
	options.User.RequireUniqueEmail = true;
	options.Password.RequireDigit = false;
	options.Password.RequireLowercase = false;
	options.Password.RequireUppercase = false;
	options.Password.RequireNonAlphanumeric = false;
	options.Password.RequiredLength = 1;
})
.AddEntityFrameworkStores<AppDBContext>()
.AddDefaultTokenProviders();

builder.Services.AddAuthentication(options =>
{
	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
	options.SaveToken = true;
	options.RequireHttpsMetadata = false;
	options.TokenValidationParameters = new TokenValidationParameters
	{
		ValidateIssuer = true,
		ValidateAudience = true,
		ValidateLifetime = true,
		ValidateIssuerSigningKey = true,
		IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"] ?? "congdinh2021@gmail.com")),
		ValidIssuer = builder.Configuration["Jwt:Issuer"],
		ValidAudience = builder.Configuration["Jwt:Audience"],
		ClockSkew = TimeSpan.Zero
	};
});

builder.Services.AddAuthorization(options =>
{
	options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
	options.AddPolicy("User", policy => policy.RequireRole("user"));
	options.AddPolicy("Pre1", policy => policy.RequireRole("pre1"));
	options.AddPolicy("Pre2", policy => policy.RequireRole("pre2"));
	options.AddPolicy("Pre3", policy => policy.RequireRole("pre3"));
});

// Dependency Injection
//-----------------------------------------------------------------------
builder.Services.AddScoped<IPostService, PostService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<ISubCategoryService, SubCategoryService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IImageService, ImageService>();
//VnPay
builder.Services.AddScoped<IVnPayService, VnPayService>();
//-----------------------------------------------------------------------
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowAll", policy =>
	{
		policy.AllowAnyOrigin()
			  .AllowAnyHeader()
			  .AllowAnyMethod();
	});
});
//----------------------------------build----------------------------------
var app = builder.Build();

// Configure the HTTP request pipeline.
if(app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
	using var scope = app.Services.CreateScope();
	var dbContext = scope.ServiceProvider.GetRequiredService<AppDBContext>();
	var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
	//DBSeedData.Truncate(dbContext);
	DBSeedData.Seed(dbContext, userManager);

}
app.UseCors("AllowAll");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
