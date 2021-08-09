package com.company.simpleThreadPackage;

import static com.company.simpleThreadPackage.SimpleThread.threadMessage;

public class MessageLoop implements Runnable {
    @Override
    public void run() {
        String importantInfo[] = {"Mares eat oats",
                "Does eat oats",
                "Little lambs eat ivy",
                "A kid will eat ivy too"};
        try {
            for (int i = 0; i < importantInfo.length; i++) {
                Thread.sleep(4000);
                threadMessage(importantInfo[i]);
            }
        }catch (InterruptedException e) {
            threadMessage("I wasn't finished yet!");
        }
    }
}
