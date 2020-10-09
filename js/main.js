$(function () {

    let goBtn = document.getElementById("go");
    let slider = document.querySelector("#bottom");
    let backBtn = document.getElementById("back");
    let nextBtn = document.getElementById("next");
    let sliderIndex = 0;
    const lastSliderIndex = 11;
    let options = {
        'skinColor': 7,
        'eye': -1,
        'nose': -1,
        'mouth': -1,
        'hair': -1,
        'hairColor': -1,
        'facialHair': -1,
        'shirt': -1,
        'shirtColor': -1,
        'bottom': -1,
        'bottomColor': -1,
        'headValue': -1,
        'shirtValue': -1,
        'signValue': -1
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
    let pickerContainer = document.querySelector(".picker-container");

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
            modalSkin.style.display = "block";
            $(pickerContainer).animate({"top":"50vh"}, {duration: 250, ease: 'swing'});
            //pickerContainer.style.top = "50vh";
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
            
            $(pickerContainer).animate({"top":"100vh"}, 250, 'swing', function(){
                modalSkin.style.display = "none";
            });
            
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

    /*Facial hair*/
    
    let $facialHair = $('.facialHair');
    let $masterFacialHair = $('#facialHair');
    $facialHair.click(function () {
        let $this = $(this);
        let index = $facialHair.index($this);
        let $facialHairClone = $facialHair.eq(index).clone();
        $masterFacialHair.empty().append($facialHairClone);
        options.facialHair = index;
    });

        var hairColorPicker = new iro.ColorPicker("#hairColorPicker", {
        width: 225,
        margin: 20
    });
    
    hairColorPicker.on('color:change', function (color) {
        if (color.saturation < 35) {
            color.saturation = 35;
        }
    });

    hairColorPicker.on('color:change', function (color) {
        var hex = hairColorPicker.color.hexString;
        var $st1 = $('.st1');
        $st1.css({
            'fill': hex
        });
        options.hairColor = hex;
    })

    /*Shirt*/

        let $shirt = $('.shirt');
    let $masterShirt = $('#shirt');
    $shirt.click(function () {
        let $this = $(this);
        let index = $shirt.index($this);
        let $shirtClone = $shirt.eq(index).clone();
        $masterShirt.empty().append($shirtClone);
        options.shirt = index;
    });

        var shirtColorPicker = new iro.ColorPicker("#shirtColorPicker", {
        width: 225,
        margin: 20
    });
    
    shirtColorPicker.on('color:change', function (color) {
        if (color.saturation < 35) {
            color.saturation = 35;
        }
    });

    shirtColorPicker.on('color:change', function (color) {
        var hex = shirtColorPicker.color.hexString;
        var $st2 = $('.st2');
        $st2.css({
            'fill': hex
        });
        options.shirtColor = hex;
    }); 
    
    /*Bottoms*/

        let $bottom = $('.bottoms');
    let $masterBottom = $('#bottoms');
    $bottom.click(function () {
        let $this = $(this);
        let index = $bottom.index($this);
        let $bottomClone = $bottom.eq(index).clone();
        $masterBottom.empty().append($bottomClone);
        options.bottom = index;
    });

        var bottomColorPicker = new iro.ColorPicker("#bottomColorPicker", {
        width: 225,
        margin: 20
    });
    
    bottomColorPicker.on('color:change', function (color) {
        if (color.saturation < 35) {
            color.saturation = 35;
        }
    });

    bottomColorPicker.on('color:change', function (color) {
        var hex = bottomColorPicker.color.hexString;
        var $st3 = $('.st3');
        $st3.css({
            'fill': hex
        });
        options.bottomColor = hex;
    }); 
    
      let $headValues = $('.headValue');
    let $masterHeadValue = $('#headValue');
    $headValues.click(function () {
        let $this = $(this);
        let index = $headValues.index($this);
        //    alert(index);
        options.headValue = index;
        let image = $this.attr('src');
        $masterHeadValue.attr('src', image);
    });
    
         let $bodyValues = $('.bodyValue');
    let $masterBodyValue = $('#shirtValue');
    $bodyValues.click(function () {
        let $this = $(this);
        let index = $bodyValues.index($this);
        //    alert(index);
        options.shirtValue = index;
        let image = $this.attr('src');
        $masterBodyValue.attr('src', image);
    });

         let $signValues = $('.signValue');
    let $masterSignValue = $('#signValue');
    $signValues.click(function () {
        let $this = $(this);
        let index = $signValues.index($this);
        //    alert(index);
        options.signValue = index;
        let image = $this.attr('src');
        $masterSignValue.attr('src', image);
    });


});
