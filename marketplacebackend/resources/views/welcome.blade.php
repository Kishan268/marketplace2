
<style type="text/css">
    .chat-row{
        margin: 50px;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    ul li{
        padding: 8px;
        background: #928787;
        margin-bottom: 20px;

    }
    .chat-input{
        border: 1px solid lightgray;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        padding: 8px 10px;
    }
</style>
<div class="container">
    <div class="row chat-row">
        <div class="chat-content">
            <ul>
            </ul>
        </div>
        <div class="chat-section">
            <div class="chat-box">
                <div class="chat-input bg-white" ID="chatInput" contenteditable="">
                    
                </div>
            </div>
        </div>
    </div>
    
</div>

{{-- <script src="https://code.jquery.com/jquery-3.6.0.js" ></script>
<script src="https://cdn.socket.io/4.1.2/socket.io.min.js" integrity="sha384-toS6mmwu70G0fw54EGlWWeA4z3dyJ+dlXBtSURSKN4vyRFOcxd3Bzjj/AoOwY+Rg" crossorigin="anonymous"></script>

<script type="text/javascript">
    const name = 'User '+parseInt(Math.random()*10)

   const ip_address = '127.0.0.1';
   const port = '4000';
   const socket = io(ip_address + ':' + port);
    socket.on('test');
 // console.log('sdf')

    const chatInput = $('#chatInput');

    chatInput.keypress(function(e){
        const message = $(this).html();
        if (e.which===13 && !e.shiftKey) {
            socket.emit('sendtoserver',message)
            console.log(message)  
            chatInput.html('');

            return false;
        }
    });
    socket.on('sendtoclient',(message)=>{
        $( ".chat-content ul" ).append( "<li>"+name+":"+message+"</li>" );
    })



</script> --}}