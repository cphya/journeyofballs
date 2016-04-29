     var camer_main :  Main Camera ;
      var camer_top :    Camera ;
      function Start()
                  {
        camer_main.enabled  = true;
        camer_top.enabled = false;
                  }
       function OnTriggerEnter(Collider cam_trigger_1)
                 {
                   
                   if(other.gameObject.name == "Cube")
                                   {
                             camer_main.enabled  = false;
                             camer_top.enabled = true;
                                }
                 }