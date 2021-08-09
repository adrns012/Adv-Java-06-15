package com.company.simpleThreadPackage;

public class SimpleThread {

    public static void threadMessage(String message){
        String threadName = Thread.currentThread().getName();
        System.out.format("%s: %s%n", threadName, message);
    }
}