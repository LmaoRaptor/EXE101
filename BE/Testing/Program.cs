
var ulid1 = Ulid.Parse("01JPCA01YQR35XBMRMT41WM6CB");
var ulid2 = Ulid.Parse("01JPCA01YQR35XBMRMT41WM6CB".ToLower());

Console.WriteLine(ulid1 == ulid2); // False
