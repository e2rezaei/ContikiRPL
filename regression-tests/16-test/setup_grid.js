
/* 	This script makes a grid topology for the network. You need first make a random topology and then run the simulation. Therefore, it changes location of 
 to a grid.
Parameters:   N = sqrt(total number of sensors)
	      distance 	
*/
//------------------------------------------------------ 


GENERATE_MSG(1000, 'move');
 
var distance = 100 ;

var N = 5; 

 while(true) {



  YIELD();
   
	if(msg.equals("move")) 
	 {
            var count = 1;
			 for(var i = 0; i < N; i++)
			 {
			     for ( var j = 0 ; j< N ; j++)
			     {
			               var id = count;

                           count = count + 1;
                        
			               
			              log.log("hi  " + id +"  " + i + "   " + j); 
			          
			               var node1 = sim.getMoteWithID(id);
			
			
			                node1.getInterfaces().getPosition().setCoordinates(i*distance , j*distance , 0);     
			         
			      }
			
			}
    }

}
