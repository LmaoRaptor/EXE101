﻿using AutoMapper;
using EXE_Bussiness.Model.UserModel;
using EXE_Data.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Service.UserService
{
    public class UserService : IUserService
    {
        private readonly AppDBContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger<UserService> _logger;

        public UserService(AppDBContext context, IMapper mapper, ILogger<UserService> logger)
        {
            _mapper = mapper;
            _context = context;
            _logger = logger;
        }
        public async Task<List<UserDTO>> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return _mapper.Map<List<UserDTO>>(users);
        }
    }
}
