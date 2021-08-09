package com.company;

//public class HelloRunnable implements Runnable {
//    @Override
//    public void run() {
//        System.out.println("Hello from this thread");
//    }

public class HelloRunnable extends Thread {
    @Override
    public void run() {
        System.out.println("Hello from this thread");
    }
}
