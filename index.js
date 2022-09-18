function scuberGreetingForFeet(ft){
  if (ft <= 400) return 'This one is on me!';
  if (ft > 400 && ft <= 2000) return 'That will be twenty bucks.';
  if (ft > 2500) return 'No can do.';
  if (ft > 2000) return 'I will gladly take your thirty bucks.'; 
}

function ternaryCheckCity(city){
  if (city === 'NYC') return 'Ok, sounds good.';
  return 'No go.';
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous') return 'Thank you so much.'
  if (tip === 'not as generous') return 'Thank you.'
  return 'Bye.'
}