//using Amazon;
//using Amazon.S3;
//using Amazon.S3.Transfer;
//using System;
//using System.IO;
//using System.Threading.Tasks;

//class S3Uploader
//{
//    private const string existingBucketName = "testbucketupload5734"; // Thay bằng bucket của bạn
//    private static readonly RegionEndpoint bucketRegion = RegionEndpoint.APSoutheast1;
//    private static IAmazonS3 s3Client;

//    static async Task Main()
//    {
//        s3Client = new AmazonS3Client(bucketRegion);

//        string filePath = @"C:\Users\lemti\Downloads\Documents\2.jpg"; // File người bán upload

//        if (!File.Exists(filePath))
//        {
//            Console.WriteLine($"Error: File '{filePath}' does not exist.");
//            return;
//        }

//        string keyName = "uploads/" + Path.GetFileName(filePath); // Đặt tên file trong S3

//        await UploadFileAsync(filePath, keyName);
//    }

//    private static async Task UploadFileAsync(string filePath, string keyName)
//    {
//        try
//        {
//            var fileTransferUtility = new TransferUtility(s3Client);

//            Upload file duy nhất
//            await fileTransferUtility.UploadAsync(filePath, existingBucketName, keyName);

//            Console.WriteLine($"Upload thành công: {keyName}");
//        }
//        catch (AmazonS3Exception e)
//        {
//            Console.WriteLine($"AWS S3 Error: {e.Message}");
//        }
//        catch (Exception e)
//        {
//            Console.WriteLine($"Unknown Error: {e.Message}");
//        }
//    }
//}



using Amazon;
using Amazon.S3;
using Amazon.S3.Transfer;

class S3Uploader
{
	private const string bucketName = "testbucketupload5734"; // Thay bằng bucket của bạn
	private static readonly RegionEndpoint bucketRegion = RegionEndpoint.APSoutheast1;
	private static IAmazonS3 s3Client;

	static async Task Main()
	{
		s3Client = new AmazonS3Client(bucketRegion);

		string filePath = @"D:\image\arrow.png"; // File người bán upload

		if(!File.Exists(filePath))
		{
			Console.WriteLine($"Error: File '{filePath}' does not exist.");
			return;
		}

		string keyName = "uploads/" + Path.GetFileName(filePath); // Đặt tên file trong S3

		string fileUrl = await UploadFileAsync(filePath, keyName);
		Console.WriteLine($"File URL: {fileUrl}"); // Trả về URL để FE sử dụng
	}

	private static async Task<string> UploadFileAsync(string filePath, string keyName)
	{
		try
		{
			var fileTransferUtility = new TransferUtility(s3Client);

			// Upload file lên S3
			await fileTransferUtility.UploadAsync(filePath, bucketName, keyName);

			// Tạo URL công khai từ S3
			string fileUrl = $"https://{bucketName}.s3.{bucketRegion.SystemName}.amazonaws.com/{keyName}";

			Console.WriteLine($"Upload thành công: {keyName}");
			return fileUrl;
		}
		catch(AmazonS3Exception e)
		{
			Console.WriteLine($"AWS S3 Error: {e.Message}");
			return null;
		}
		catch(Exception e)
		{
			Console.WriteLine($"Unknown Error: {e.Message}");
			return null;
		}
	}
}
