
    project_names = ['TRANS-GANGA HI-TECH CITY, UNNAO',
                    'SARASWATI HI-TECH CITY ALLAHABAD',
                    'PERFUME CITY, KANNAUJ',
                    'TRANS-DELHI SIGNATURE CITY, GAZIABAD',
                    'PLASTIC CITY, AURARIA',
                    'AMRITSAR KOLKATA INDUSTRIAL CORRIDOR, AURARIA']

    document.querySelectorAll('.project_read_btn').forEach((arr, index) => {
        arr.addEventListener('click', () => {
            console.log(arr)
            if(index !== 0){
                document.querySelector('.project_info_heading').innerHTML = project_names[index]
                document.querySelector('.project_intro').innerHTML = 'Content not yet updated'
                document.querySelector('.project_usp').innerHTML = 'Content not yet updated'
                document.querySelector('.project_investment').innerHTML = 'Content not yet updated'
                document.querySelector('.project_google_map').innerHTML = 'Content not yet updated'
            }
            else{
                document.querySelector('.project_info_heading').innerHTML = project_names[index]
                document.querySelector('.project_intro').innerHTML = `
                <img src="images/image 3.png" alt="" srcset="">
                <div class="intro_content">
                    <a href="#" style="text-decoration: none;">Latitude, Longitude - 23.43718, 87.25307 (Click to view map)</a>
                    <p>Trans Ganga City is being developed as an Industrial Model Township with industrial, residential and commercial sectors. Situated within burgeoning belt of Kanpur and Lucknow zone.</p>
                    <p>Trans Ganga City is being developed as an Industrial Model Township with industrial, residential and commercial sectors. Situated within burgeoning belt of Kanpur and Lucknow zone.</p>
                    <ol>
                        <li>Spread over <strong>1144.1 Acres</strong> of near Kanpur.</li>
                        <li>Current Rate <strong>10850 INR/Sq. mtr.</strong> for industrial & 18000 INR/Sq. mtr. for residential.</li>
                    </ol>
                </div>
                `
                document.querySelector('.project_usp').innerHTML = `
                <div class="project_tab">
                    <img src="images/usp 2.png" alt="" srcset="">
                    <h2>USPs OF THE PROJECT</h2>
                </div>
                <div class="usp_content_container">
                    <div class="usp_content">
                        <p>The city design has been planned at 2 levels -</p>
                        <ol>
                            <li>With the design level elements required to make the city sustainable. </li>
                            <li>The implementation of green roof, earth cooling, solar panels, ground water recharge & waste management</li>
                        </ol>
                        <p>In heart of the project, an iconic auto expo mart is planned, making it a prominent visual marker.
                            An amalgamation of cluster with various project based activities creating a functionally rich urban plaza.</p>
                    </div>
                    <img src="images/image 4.png" alt="" srcset="">
                </div>
                <div class="usp_list">
                    <p>The project features are as follows:</p>
                    <div class="usp_item">
                        <img src="images/image 5.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Provision of 24x7 power supply.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 6.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">International design standard.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 7.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Provision for mall, exhibition centre, golf course, commercial, residences and retail shops.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 8.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Beautiful landscape with water bodies.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 9.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Ample green spaces.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 10.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Moderate and ambient temperature.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 11.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Self-sufficient in terms of water supply and sewage.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 12.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Adequately planned Sewerage Treatment Plant (STP).</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 13.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Utility infrastructure of water supply, roads, drains, street light.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 14.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Multiple choices for industrial, commercial & residential areas  Planned commercial, residential and elementary infrastructure for industrial units.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 15.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Emergency infrastructure of police and fire stations..</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 16.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Independent overhead water tank to provide uninterrupted water supply.</span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 17.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Ample parking facility with greenery in the area, providing a healthy surroundings.
                        </span>
                    </div>
                    <div class="usp_item">
                        <img src="images/image 18.png" alt="" class="usp_list_icon">
                        <span class="usp_item_text">Iconic towers to be designed along the Ganga riverfront</span>
                    </div>
                </div>
                `
                document.querySelector('.project_investment').innerHTML = `
                <div class="project_tab">
                    <img src="images/investment 2.png" alt="" srcset="">
                    <h2>INVESTNMENT OPPORTUNITIES</h2>
                </div>
                <div class="investment_content_container">
                    <div class="investment_content">
                        <img src="images/image 19.png" alt="">
                        <div class="investment_content_2">
                            <p><strong>Industrial</strong></p>
                            <p>Two distinct types of land parcels are proposed, flatted factories and industrial plots. The total area of Industrial Land available is appox. 9,71,246 Sq. Mt. (240 Acres).</p>
                            <ol>
                                <li>Industries in the enclave will be pollution free (zero liquid discharge zone)</li>
                                <li>Proposed industries include Food Processing, MSME’s such as Engineering Goods, Assembly Units, Leather (Non Polluting) ,Textiles Garments and ESDM industries.</li>
                            </ol>
                        </div>
                        <div class="investment_content_2">
                            <p><strong>Residential Units</strong></p>
                            <ol>
                                <li> With ever burgeoning demand on residential infrastructure in Delhi NCR people will be naturally attracted with job opportunities and connectivity to Delhi.</li>
                                <li>Smart city concept will make life easier and quality of life will improve.</li>
                                <li>With transit time lessening, work life balance of society will improve, giving rise to a healthy population.</li>
                            </ol>
                        </div>
                        <div class="investment_content_2">
                            <p><strong>Commercial</strong></p>
                            <p>Aims to be a self-sustained city with commercial establishments such as shopping complexes, malls, theatre, multiplexes, restaurants, auto showrooms, hotels, auto expo centre and other commercial establishments. The area will also have a special golf course for recreational purposes.</p>
                        </div>
                        <div class="investment_content_2">
                            <p><strong>Institutions</strong></p>
                            <p>As an integrated township the focus is on encouraging various institutions such as schools, colleges, universities training & skill development centres to make this zone an attractive destination for investments. It consists of three site for educational institutions to develop the zone as a world class education hub having facilities from primary schools to post graduation level.</p>
                        </div>
                    </div>
                </div>
                `
                document.querySelector('.project_google_map').innerHTML = `
                <div class="project_tab">
                    <img src="images/59942 1.png" alt="" srcset="">
                    <h2>LOCATION</h2>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.723091168576!2d80.34218071491513!3d26.52902888288854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c393d42bdebd9%3A0x565ca2daa4b7e02!2sTrans+Ganga+City!5e0!3m2!1sen!2sin!4v1510406627153" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                `
            }
        })
    })

    $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 500) {
                document.querySelector('.upper_arrow img').style.transform = "rotateZ(90deg)"
                document.querySelector('.upper_arrow').href="#flagship_container_id"
            } else {
                document.querySelector('.upper_arrow img').style.transform = "rotateZ(-90deg)"
                document.querySelector('.upper_arrow').href="#project_info"
            }
        });