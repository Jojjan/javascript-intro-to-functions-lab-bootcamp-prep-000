function shout(string) {
   return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string){
  console.log('HELLO');
  logShout();
  return string.toLowerCase();
} 
 function logWhisper(string){
   console.log ('logWhisper');
   logWhisper();
   return string.toUpperCase();
 }
 