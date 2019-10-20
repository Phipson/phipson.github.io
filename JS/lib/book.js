(function($){
    $(document).ready(function() {

        function reloadScripts() {
            $("#research-book").empty();
  
            var str = `<!-- Scripts for Flipbook -->
              <script type="text/javascript" src="./JS/lib/jquery.min.1.7.js"></script>
              <script type="text/javascript" src="./JS/lib/jquery-ui-1.8.20.custom.min.js"></script>
              <script type="text/javascript" src="./JS/lib/jquery.mousewheel.min.js"></script>
              <script type="text/javascript" src="./JS/lib/modernizr.2.5.3.min.js"></script>
              <script type="text/javascript" src="./JS/lib/turn.min.js"></script>
              <script type="text/javascript" src="./JS/lib/hash.js"></script>
              <div id="book-zoom">
                  <div class="flipbook-viewport">
                      <div class="container">
                        <div class="flipbook">

                            <!-- Cover Page -->
                            <div class="hard">
                            <div style="height: 100%; width: 100%; background-image:url(https://live.staticflickr.com/4103/5032206759_e0b3c4f45a_b.jpg)">
                                <div style="height: 100%; display: flex; justify-content: center; align-items: center; background-color: rgba(255,255,255, 0.3)">
                                <div>
                                <h3 style="color: black">Research Notebook</h3>
                                <br><br>
                                <h6>(Click the bottom corners of the book to read)</h6>
                                </div>
                                </div>
                            </div>
                            </div>
                          <div class="hard">
                          <div style="height: 100%; width: 100%; background-image:url(https://live.staticflickr.com/4103/5032206759_e0b3c4f45a_b.jpg); -webkit-transform: rotate(180deg); background-color: rgba(255,255,255, 0.3)"></div>
                          </div>

                          <!-- Table of Content -->
                          <div style="display: flex; align-items: center; justify-content: center">
                            <div class="pagecontent">
                                <h4>Table of Contents</h4>
                                <br><br>
                                <p style="text-align: left">UCLA Human Computer Interaction Lab</p>
                                <br>
                                <p style="text-align: left">UCLA Vision Cognition Learning and Autonomy</p>
                                <br>
                                <p style="text-align: left">Chinese University of Hong Kong</p>
                                <br>
                                <p style="text-align: left">Hong Kong Broadband Network</p>
                            </div>
                        </div>

                        <!-- UCLA HCI -->
                        <div>
                            <div style="height: 100%; display: flex; justify-content: center; align-items: center">
                                <div class="pagecontent">
                                    <div class="pagegrid">
                                        <div class="pagegridcell">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/University_of_California%2C_Los_Angeles_logo.svg/1280px-University_of_California%2C_Los_Angeles_logo.svg.png" style="width: 100%">
                                        </div>
                                        <div class="pagegridcell">
                                            <div>
                                            <h6>UCLA HCI Lab</h6>
                                            (June 2018 - Present)
                                            <p style="text-align: left"> 
                                            <br>
                                            <b>Focus:</b> AR and VR Explorations (CAVECAD); Voice Input Interfaces (Geno)
                                            <br><br>
                                            <a class="booklink" onclick="transitionToPage('./Projects/uclahci.html')"><b>Click to learn more</b></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- UCLA VCLA -->
                        <div>
                            <div style="height: 100%; display: flex; justify-content: center; align-items: center">
                                <div class="pagecontent">
                                    <div class="pagegrid">
                                        <div class="pagegridcell">
                                            <img src="https://vcla.stat.ucla.edu/images/logo_v3%20-%20Small.png" style="width: 50%">
                                        </div>
                                        <div class="pagegridcell">
                                            <div>
                                            <h6>UCLA VCLA</h6>
                                            (June 2018 - Present)
                                            <p style="text-align: left"> 
                                            <br>
                                            <b>Focus:</b> Virtual AI Agents (VRGym); Physics Simulation Environment (Bullet Physics Engine)
                                            <br><br>
                                            <a class="booklink" onclick="transitionToPage('./Projects/vcla.html')"><b>Click to learn more</b></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- CUHK -->
                        <div>
                            <div style="height: 100%; display: flex; justify-content: center; align-items: center">
                                <div class="pagecontent">
                                    <div class="pagegrid">
                                        <div class="pagegridcell">
                                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/CUHK.svg/1200px-CUHK.svg.png" style="width: 80%">
                                        </div>
                                        <div class="pagegridcell">
                                            <div>
                                            <h6>CUHK Self Regulation Lab</h6>
                                            (June 2016 - August 2016)
                                            <p style="text-align: left"> 
                                            <br>
                                            <b>Focus:</b> Exploring Emotion and Self Regulation in Mobile Usage
                                            <br><br>
                                            <a class="booklink" onclick="transitionToPage('./Projects/cuhk.html')"><b>Click to learn more</b></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- HKBN -->
                        <div>
                            <div style="height: 100%; display: flex; justify-content: center; align-items: center">
                                <div class="pagecontent">
                                    <div class="pagegrid">
                                        <div class="pagegridcells">
                                            <img src="http://61.92.45.75/new/images/3.0/hkbn-logo.png" style="width: 80%">
                                        </div>
                                        <div class="pagegridcell">
                                            <div>
                                            <h6>HKBN IT Business Intern</h6>
                                            (June 2017 - August 2017)
                                            <p style="text-align: left"> 
                                            <br>
                                            <b>Focus:</b> Exploring user experience with online transactions and customer service
                                            <br><br>
                                            <a class="booklink" onclick="transitionToPage('./Projects/hkbn.html')"><b>Click to learn more</b></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div class="hard">
                        <div style="height: 100%; width: 100%; background-image:url(https://live.staticflickr.com/4103/5032206759_e0b3c4f45a_b.jpg); background-color: rgba(255,255,255, 0.3)"></div>
                        </div>
                        <div class="hard">
                        <div style="height: 100%; width: 100%; background-image:url(https://live.staticflickr.com/4103/5032206759_e0b3c4f45a_b.jpg); -webkit-transform: rotate(180deg); background-color: rgba(255,255,255, 0.3)"></div>
                        </div>
                      </div>
                    </div>
              </div>`;
            
            $("#research-book").append(str);
        };
  
        function loadApp() {
          reloadScripts();
  
          // Create the flipbook
          // Get Dimensions of Screen
          var w = window.innerWidth * .5;
          var h = w/2 * 1.3;

          $('.flipbook').css({marginLeft: w/4});
        
          $('.flipbook').turn({
              // Width
        
              width:w,
              
              // Height
        
              height:h,
        
              // Elevation
        
              elevation: 50,
              
              // Enable gradients
        
              gradients: true,
              
              // Auto center this flipbook
        
              autoCenter: false
        
          });
        }
        
        // Load the HTML4 version if there's not CSS transform
        
        yepnope({
          test : Modernizr.csstransforms,
          yep: ['./JS/lib/turn.js'],
          nope: ['./JS/lib/turn.html4.min.js'],
          both: ['./style.css'],
          complete: loadApp
        });
  
        // Window Resize Event
        window.addEventListener("resize", loadApp);
    })
})(jQuery);