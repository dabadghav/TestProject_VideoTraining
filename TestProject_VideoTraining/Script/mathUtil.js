//JavaScript
//JScript

function test()
{
 Log.Message("Generated random number: " + getRandomNumberBetween(30,75))
}

function getRandomNumberBetween(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}