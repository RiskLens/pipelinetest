using NUnit.Framework;
using Services;
using System.Linq;

namespace ServiceTests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void WeatherService_GetForecasts_ReturnsValues()
        {
            // arrange
            var weatherService = new WeatherService();

            // act
            var forecast = weatherService.GetForecasts();

            // assert
            Assert.AreEqual(5, forecast.Count());
        }
    }
}