package com.company;

import com.company.simpleThreadPackage.MessageLoop;

import static com.company.simpleThreadPackage.SimpleThread.threadMessage;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        // delay in ms before interrupting MessageLoop thread(default one hour)
        long patience = 1000 * 60 * 60;

        // If the command line argument is present, gives patience in seconds.
        if(args.length > 0){
            try {
                patience = Long.parseLong(args[0]) * 1000;
            } catch (NumberFormatException e) {
                System.out.println("Argument must be an integer");
                System.exit(1);
            }
        }

        threadMessage("Starting MessageLoop thread");
        long startTime = System.currentTimeMillis();
        Thread t = new Thread(new MessageLoop());
        t.start();

        threadMessage("Waiting for MessageLoop thread to finish");
        //  Loop until the MessageLoop thread exits
        while(t.isAlive()) {
            threadMessage("Still waiting...");
            //waiting maximum of 1 second for the MessageLoop thread to finish
            t.join(1000);
            if(((System.currentTimeMillis()-startTime)> patience) && t.isAlive()){
                threadMessage("Tired of waiting for this!");
                t.interrupt();
            //  Shouldnt be long now -- waiting
                t.join();
            }
        }
        threadMessage("About time!");
    }
//        (new Thread(new HelloRunnable())).start();
//        String importantInfo[] = {
//                "Mares eat oats",
//                "Does eat oats",
//                "Little lambs eat ivy",
//                "A kid will eat ivy too"
//        };
//        for(int i = 0; i < importantInfo.length; i++){
//            // Pause for 4 seconds
//            try {
//                Thread.sleep(4000);
//            }catch(InterruptedException e){
//                return;
//            }
//            // print out the info
//            System.out.println(importantInfo[i]);
//        }
//        String inputs[] = {
//                "Mares eat oats",
//                "Does eat oats",
//                "Little lambs eat ivy",
//                "A kid will eat ivy too"
//        };
//        for(int i = 0; i < inputs.length; i++){
//            heavyCrunch(inputs[i]);
//            if(Thread.interrupted()){
//                // been interrupted: no more crushing.
//                return;
//            }
//        }
//    }
//    private static void heavyCrunch(String input) {
//    };
}