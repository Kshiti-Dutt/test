
Webcam.set({
    width:300,
    height:200,
    image_format:'png',
    png_quality:90
});

cam = document.getElementById("camera");

Webcam.attach('#camera');


function snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);


classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/z0hkuIrxq/model.json",model);


function model() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
    console.log("Hi");
}


function gotResult(error, results){
    if (error)
    {
        console.error(error);
    }

    else
    {
        console.log("Hello");
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}