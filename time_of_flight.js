var takeOffTime = [];
var landingTime = [];
var timePerSkill = [];
var NoOfSkills = 0;

function playPause() { 
var myVideo = document.getElementById("video1"); 

    if (myVideo.paused) 
    {
        myVideo.play(); 
    }
    else 
    {
       myVideo.pause(); 
    }
} 

function nextFrame() { 
var myVideo = document.getElementById("video1"); 

   myVideo.currentTime += (1 / 24);
}

function previousFrame() { 
var myVideo = document.getElementById("video1"); 

   myVideo.currentTime -= (1 / 24);
} 

function takeOff() {
	var myVideo = document.getElementById("video1"); 

  $("#landing").show();
  $("#takeOff").hide();
  takeOffTime[ NoOfSkills ] = myVideo.currentTime;
}

function landingSkill() {
	var myVideo = document.getElementById("video1"); 

		landingTime[ NoOfSkills ] = myVideo.currentTime;
		timePerSkill[NoOfSkills] = landingTime[NoOfSkills] - takeOffTime[NoOfSkills]
		if( NoOfSkills === 0 ) 
			addSkillToTable( NoOfSkills + 1, 
				   (timePerSkill[NoOfSkills]).toFixed(3),
				   0 );
		else 
			addSkillToTable( NoOfSkills + 1, 
					(timePerSkill[NoOfSkills]).toFixed(3),
				   (timePerSkill[NoOfSkills] - timePerSkill[NoOfSkills-1]).toFixed(3) );
				   
		NoOfSkills++;
		
	if( NoOfSkills == 10 ) {
		$("#landing").hide();
		$("#takeOff").hide();

	}
	else{
		
		$("#takeOff").html( "Take off Skill " + (NoOfSkills + 1) );
		$("#landing").html( "Landing Skill " + (NoOfSkills  + 1));
		$("#landing").hide();
		$("#takeOff").show();
	}
}



function addSkillToTable( skillNo, ToF, delta ){
    var table = document.getElementById("tof-table");
	var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
    cell1.innerHTML = skillNo;
    cell2.innerHTML = ToF;
	cell3.innerHTML = delta;

}
