$(function () {

    let goBtn = document.getElementById("go");
    let slider = document.querySelector("#bottom");
    let backBtn = document.getElementById("back");
    let nextBtn = document.getElementById("next");
    let sliderIndex = 0;
    const lastSliderIndex = 9;
    let options = {
        'skinColor': 7,
        'eye': -1,
        'nose': -1,
        'mouth': -1,
        'hair': -1,
        'hairColor': -1,
        'facialHair': -1,
        'shirt': -1,
        'bottom': -1
    };

    /*
    goBtn.onclick = function () {
        landing.style.marginLeft = "-90vw";
    }
    */

    goBtn.onclick = function () {
        landing.style.marginLeft = "-90vw";
    }

    backBtn.onclick = function () {
        if (sliderIndex === 0) {
            landing.style.marginLeft = "0vw";
        }
        if (sliderIndex > 0) {
            if (sliderIndex === lastSliderIndex) {
                nextBtn.style.display = "block";
            }
            sliderIndex--;
        }
        moveSlider();
    };

    nextBtn.onclick = function () {
        if (sliderIndex < lastSliderIndex) {
            sliderIndex++;
            if (sliderIndex === lastSliderIndex) {
                nextBtn.style.display = "none";
            }
        }
        if (sliderIndex === 3) {
            SVGInject.setOptions({
                afterLoad: function (svg, svgString) {
                    svg.classList.add('hairColour');
                }
            })
            SVGInject(document.querySelectorAll("#hair"));
        }
        moveSlider();
    };

    function moveSlider() {
        slider.style.marginLeft = -sliderIndex * 100 + '%';
    }

    /*Skin color*/

    var skinColorPicker = new iro.ColorPicker("#skinPicker", {
        width: 300,
    });

    let $skinColors = $('#skinColour .colour');
    let $person = $('.st0');
    let modalSkin = document.querySelector(".modalSkin");

    skinColorPicker.on('color:change', function (color) {
        if (color.saturation < 35) {
            color.saturation = 35;
        }
    });

    skinColorPicker.on('color:change', function (color) {
        var hex = skinColorPicker.color.hexString;
        $person.css({
            'fill': hex
        });
        options.skinColor = hex;
    })

    $skinColors.click(function () {
        let $this = $(this);
        let index = $skinColors.index($this);
        if (index === 8) {
            modalSkin.style.transform = "translate(0, -32vh)";
            return;
        }
        let color = $this.css('background-color');
        options.skinColor = index;
        $person.css({
            'fill': color
        });
    })

    $(modalSkin).click(function (e) {
        if (e.target === e.currentTarget) {
            this.style.transform = "translate(0, 100vh)"
        }

    })

    /* $(modal).click(function(e){
         alert(e.target);
     })*/

    /*   $(document).click(function(){
           modal.style.transform = "translate(-14%, 600px)";
       });
       */

    /*Eyes*/

    let $eyes = $('.eyes');
    let $masterEyes = $('#eyes');
    $eyes.click(function () {
        let $this = $(this);
        let index = $eyes.index($this);
        //    alert(index);
        options.eye = index;
        let image = $this.attr('src');
        $masterEyes.attr('src', image);
    });

    /*Nose*/

    let $nose = $('.nose');
    let $masterNose = $('#nose');
    $nose.click(function () {
        let $this = $(this);
        let index = $nose.index($this);
        //    alert(index);
        options.nose = index;
        let image = $this.attr('src');
        $masterNose.attr('src', image);
    });

    /*Mouth*/

    let $mouth = $('.mouth');
    let $masterMouth = $('#mouth');
    $mouth.click(function () {
        let $this = $(this);
        let index = $mouth.index($this);
        options.mouth = index;
        let image = $this.attr('src');
        $masterMouth.attr('src', image);
    });

    /*Hair*/


    /*   let svg = document.querySelector('#Layer_1');
       let path = svg.getElementsByTagName("path")[0];*/
    //    let hair1 = document.querySelector('#hair1').innerHTML;
    //    let hair = document.querySelector('#hair');
    //    hair.innerHTML = hair1;
    //    
    //        var hairColorPicker = new iro.ColorPicker("#hairPicker", {
    //        width: 300,
    //    });

    svg = document.querySelector('#Layer_2');
    let path = svg.getElementsByTagName("path")[0];

    let $hair = $('.hair');
    let $masterHair = $('#hair');
    let $hairColour = $('#hair g .st1');
    $hair.click(function () {
        let $this = $(this);
        let index = $hair.index($this);
        let $hairClone = $hair.eq(index).clone();
        $masterHair.empty().append($hairClone);
        options.hair = index;
    });

    //        hairColorPicker.on('color:change', function (color) {
    //        if (color.saturation < 35) {
    //            color.saturation = 35;
    //        }
    //    });

    //    hairColorPicker.on('color:change', function (color) {
    //        var hex = hairColorPicker.color.hexString;
    //        $hairColour.css({
    //            'fill': hex
    //        });
    //        options.hairColor = hex;
    //        console.log(options.hairColor)
    //    })

    /*Facial hair*/

    let $facialHair = $('.facialHair');
    let $masterFacialHair = $('#facialHair');
    $facialHair.click(function () {
        let $this = $(this);
        let index = $facialHair.index($this);
        options.facialHair = index;
        let image = $this.attr('src');
        $masterFacialHair.attr('src', image);
    });

    /*Shirt*/

    let $shirt = $('.shirt');
    let $masterShirt = $('#shirt');
    $shirt.click(function () {
        let $this = $(this);
        let index = $shirt.index($this);
        options.shirt = index;
        let image = $this.attr('src');
        $masterShirt.attr('src', image);
    });

    /*Bottoms*/

    let $bottom = $('.bottom');
    let $masterBottom = $('#bottoms');
    $bottom.click(function () {
        let $this = $(this);
        let index = $bottom.index($this);
        options.bottom = index;
        let image = $this.attr('src');
        $masterBottom.attr('src', image);
    });

});
