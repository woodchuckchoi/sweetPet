var ws = null;

$(document).ready(() => {
    ws = new WebSocket("ws://0.0.0.0:8080");
    ws.onmessage = (event) => {
        console.log(event)
        let data = JSON.parse(event.data);

        $("#chatLog").append("<p><span>"+data["message"]+"</span></p>");
    }
});

$("#chatConsole").on("keypress", (e)=>{
    if (e.which === 13) {
        let data = $("#chatConsole").val();
        ws.send(data);
        $("#chatConsole").val("");
    }
})