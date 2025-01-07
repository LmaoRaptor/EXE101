namespace Testing
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Ulid ulid = Ulid.NewUlid();
            Console.WriteLine(ulid.ToString());
            Console.WriteLine(DateTime.Now);
        }
    }
}
