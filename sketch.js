function preload(){
  big_pic = loadImage("apple.jpg")
  spider_man = loadSound("Spideo-musico-playo.mp3")
  sus = loadSound("Among us.mp3")
  Sans = loadSound("Sans.mp3")
  smooth = loadSound("Smooth.mp3")
  Mando = loadSound("Mandalorian.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  //spider_man.play()
  song1 = createButton("Spider-Man")
  song1.position(130, 0)
  song1.mousePressed(songone)
  song2 = createButton("Among Us")
  song2.position(215,0)
  song2.mousePressed(songtwo)
  song3 = createButton("Megalovania")
  song3.position(295,0)
  song3.mousePressed(songthree)
  song4 = createButton("Smooth Criminal")
  song4.position(390,0)
  song4.mousePressed(songfour)
  song5 = createButton("Mandalorian")
  song5.position(510,0)
  song5.mousePressed(songfive)
  stop = createButton("Stop")
  stop.position(50,20)
  stop.mousePressed(stup)
  
 volume = createSlider(0,1,0.1,0.1)
  volume.position(0, 0)
  //spider_man.play()
  
}

function draw(){
  background(big_pic)
  spider_man.setVolume(volume.value())
  sus.setVolume(volume.value())
  Sans.setVolume(volume.value())
  smooth.setVolume(volume.value())
  Mando.setVolume(volume.value())
}
function songone(){spider_man.play()
  sus.stop()
  Sans.stop()
  smooth.stop()
  Mando.stop()}
function songtwo(){sus.play()
  spider_man.stop()
  Sans.stop()
  smooth.stop()
  Mando.stop()
                  }
function songthree(){Sans.play()
  spider_man.stop()
  sus.stop()
  smooth.stop()
  Mando.stop()
                    }
function songfour(){smooth.play()
  spider_man.stop()
  sus.stop()
  Sans.stop()
  Mando.stop()
                   }
function songfive(){Mando.play()
  spider_man.stop()
  sus.stop()
  Sans.stop()
  smooth.stop()
                   }
function stup(){
  spider_man.stop()
  sus.stop()
  Sans.stop()
  smooth.stop()
  Mando.stop()
}