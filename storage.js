var uploader = document.getElementById('uploader')
var fileButton = document.getElementById('fileButton')

fileButton.addEventListener('change', function(e){
    var file = e.target.file[0]

    var storange = firebase.storange();
    var storageRef = storange.ref();
    var imagensRef = storageRef.child('arquivos');
    var spaceRef = storange.child('arquivos/' + file.name);

    var task = spaceRef.put(file)

    task.on('state_changed',
         function progress(snapshot){
             var percentage = (enapshot.bytesTransFered / snapshot.totalBytes)* 100
             uploader = percentage
        },
         function error (err){
             console.log(err)
         },
        function complete(){
        alert('envio completo')
    }
)
})

