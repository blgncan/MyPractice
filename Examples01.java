package Exaples;

import java.util.Scanner;

public class Examples01 {
    public static void main(String[] args) {
        //*********Kullanıcıdan alınan stringi tersten yazma********
        Scanner input=new Scanner(System.in);
        System.out.println("Lütfen bir cümle yazınız.");

        String cumle=input.nextLine();
        String ters="";
        for (int i=cumle.length()-1;i>=0;i--){
           ters=ters+cumle.charAt(i);
           }
        System.out.println(ters);
        //*********Kullanıcıdan alınan stringi tersten yazma********

        //**********Bir sayının rakamlarının toplamı**********
        int sayi=578;
        int sum=0;
        for (int i=sayi;i>0;i=i/10){
            sum=sum+i%10;
        }
        System.out.println("Bu sayının rakamlarının toplamı: "+sum);

        //**********Bir sayının rakamlarının toplamı**********


        //**********Artık Yıl(Leap Year) olup olmadığını bulma

        //1)Yil 100'e bolunurse 400'e de bolunmelidir. 1600==>Leap    1800==>Leap degil
        //2)Yil 100'e bolunmuyorsa 4'e bolunmelidir. 2004==>Leap    2005==>Leap degil
        int year=2007;
       String reasult= year%100==0?year%400==0?"Leap Year":"Not Leap Year":year%100==0?"Leap Year":"Not Leap Year";
        System.out.println(reasult);

        //**********Artık Yıl(Leap Year) olup olmadığını bulma
    }
}
