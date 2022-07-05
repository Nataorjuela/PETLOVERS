package petlovers.app.petloverchat.controllers;


import com.pusher.rest.Pusher;
import org.springframework.web.bind.annotation.*;
import petlovers.app.petloverchat.dtos.MessageDTO;

@RestController
@RequestMapping("api")
@CrossOrigin(origins="*")
public class ChatController {
    @PostMapping("/messages")
    public void message(@RequestBody MessageDTO messageDTO){
        Pusher pusher = new Pusher("1432809", "6136aa3612d9d2f6aaa0", "66ffa418febd1ba09d3d");
        pusher.setCluster("us2");
        pusher.setEncrypted(true);

        pusher.trigger("chat","message",messageDTO);

    }
}
