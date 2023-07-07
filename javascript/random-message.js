// JavaScript Document


var heading ="<b> &nbspFeedback;&nbsp</b>";
var randomText = [];
randomText[0] = heading+'Arrived last week. Got them on the wall - Stunning! xx  <b> - Amy </b>';
randomText[1] = heading+'Art beautiful. many thanks <b> - Sarah Jackson</b>';
randomText[2] = heading+'love them, thank you!! xo <b> - Leana Gray</b>';
randomText[3] = heading+'Abso ovr the moon.great items beautifully packed. highly recommend,thank you xx <b> - Natalie</b>';
randomText[4] = heading+'Beautiful Art, well packaged and quickly sent. <b>Patrick Hamilton </b>';
randomText[5] = heading+'Amazing Artwork, fast delivery, excellent <b> - Dr James McCall </b>';
randomText[6] = heading+'Quick delivery, pictures are excellent and well packaged. No problems <b> - Porthcall</b>';
randomText[7] = heading+'Prompt delivery perfect pieces for my new studio\m/ <b> - Craig Rox </b>';
randomText[8] = heading+'Arrived quickly and as described. Quick response to questions, would deal again <b> - Jeanne</b>';
randomText[9] = heading+'Brilliant service all round <b> - Fr Sean Ross </b>';
randomText[10] = heading+'Pictures tremendous, fast delivery & good packaging <b> - Karen </b>';
randomText[11] = heading+'Received in good time, and look great <b> - Terry Collins</b>';
randomText[12] = heading+'Art just as described, well packed, highly recommend <b> - Lowrie </b>';
randomText[13] = heading+'Excellent, Good Communication , High Quality Art , Thank You <b> - J Mathews </b>';
randomText[14] = heading+'Delighted with picture.Great emails.Highly recommend.Many thanks. <b> John McCall </b>';
randomText[15] = heading+'Great comms and speedy delivery. Art really brings the place to life. Many thanks <b> - Andrew Jack </b>';
randomText[16] = heading+'All good thanks :O) <b> - B </b>';
randomText[17] = heading+'Pictures really brighten up the sitting room. Thank you very much! x <b> - Emma </b>';
randomText[18] = heading+'Very happy with purchase. <b> - Gerry Harte </b>';
randomText[19] = heading+'Artwork arrived as described, many thanks <b> - Angela Carr </b>';
randomText[20] = heading+'Perfect in my new flat! many thanks X <b> - Michaela Curtis</b>';
randomText[21] = heading+'Totally blown away! very fast delivery. thank you! xxo <b> - Pamela Hill </b>';
randomText[22] = heading+'Very pleased will be buying again soon <b> - Colin </b>';
randomText[23] = heading+'Amazing Art! Thank you, super quick delivery :) <b> - Sarah Gill </b>';
randomText[24] = heading+'Perfect fast delivery and absolutely In love with my pictures thanks so much x <b> - Aileen Gall</b>';
randomText[25] = heading+'Fantastic quick delivery so happy with the two pieces I purchased thank you <b> - Dr Adam Collins</b>';
randomText[26] = heading+'Great communication and fast delivery,very pleased <b> - Aileen Thorpe </b>';
randomText[27] = heading+'great service. Everything perfect!! <b> - Angeline Yorke </b>';
randomText[28] = heading+'Great Artist, as described.. Looks amazing! Many thanks <b> - Annielies Harris </b>';
randomText[29] = heading+'A fabulous artist...but Im sure you here that a lot! <b> - Kerry Davis </b>';
randomText[30] = heading+'Absolutely brill , super artist thank you so much <b> - Lucy Thompson</b>';
randomText[31] = heading+'Brilliant service all round <b> - Chris  </b>';
randomText[32] = heading+'Arrived really quickly. Absolutely perfect. Thank you <b> - Stephanie McGarry </b>';
randomText[33] = heading+'Cheers, love them <b> - Adrianna Cassini MD</b>';
randomText[34] = heading+'All good, thank you <b> - Gerry Millar </b>';
randomText[35] = heading+'Excellent, Good Communication , High Quality Art , Thank You <b> - Gordy Yor </b>';
randomText[36] = heading+'Ab Fab!! Took my breath away! Thank you xxx <b> - Josephine Evans </b>';
randomText[37] = heading+'Love Love Love <b> - Murray</b>';
randomText[38] = heading+'Perfect and thanks <b> - Dr Andy Baxter </b>';
randomText[39] = heading+'Quickly received item , very high quality, ty <b> - Marc Johnson </b>';
randomText[40] = heading+'very pleased, love the detail in them  <b> - Paul K </b>';
randomText[41] = heading+'Very pleased much with Art and very fine quality  <b> - Kriss </b>';
randomText[42] = heading+'Hi Jef Received the Jimmy drawing, love it already framed and hanging Many thanks <b> - G Kettle </b>';
randomText[43] = heading+'Very pleased, thank you xx <b> - Philippa </b>';
randomText[44] = heading+'Based AF -  <b> Mark Evans</b>';
randomText[45] = heading+'perfect for annoying libtards. cheers big ears </b>';
randomText[46] = heading+'Genuinely Offensive, and I love it!  <b>Gordan McDowell</b>';
randomText[47] = heading+'Very High Quality, thanks - <b> Adriana Giordanno </b>';
randomText[48] = heading+'Amazing! I love the artwork - <b>Phillipa Pickles</b>';
randomText[49] = heading+'Fully awake to the Propaganda  <b> - Alfie Sanders</b>';
randomText[50] = heading+'The Best Part about being a Conspiracy Theorist is No Myocarditus! <b>Grant Forrester</b>';
randomText[51] = heading+'Been getting lots of comments from the Sheeple at Work! <b>Trev Goodie</b>';
randomText[51] = heading+'Ive been wearing it every day since it arrived. Love it! <b>Shelley x</b>';

var shuffleTitle = function(divID) {
  var id = Math.round(Math.random() * (randomText.length - 1));
  document.getElementById(divID).innerHTML = randomText[id];
}


