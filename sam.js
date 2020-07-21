/*
한국에서는:


나이가 같으면 "친구"
자신보다 나이가 어릴 경우 "남동생", "여동생"

남자의 경우:


자신보다 나이가 많은 남자에게 "형"
자신보다 나이가 많은 여자에게 "누나"

여자의 경우:


자신보다 나이가 많은 남자에게 "오빠"
자신보다 나이가 많은 여자에게 "언니"

if문을 활용해서 호칭을 판별해주는 코드를 만들어봅시다.

*/


function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
  if(myAge===yourAge){
    return "친구"
  }
  if(myGender=='male' && yourGender=='male'){
    if(myAge>yourAge){
      return "남동생"
    } else return "형"
  }
  if(myGender=='male' && yourGender=='female'){
    if(myAge>yourAge){
      return "여동생"
    } else return "누나"
  }
  if(myGender=='female'&&yourGender=='female'){
    if(myAge>yourAge){
      return "언니"
    } else return "여동생"
  }
  if(myGender=='female'&&yourGender=='male'){
    if(myAge<yourAge){
      return "누나"
    } else return "남동생"
  }
}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);