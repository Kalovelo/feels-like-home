#include <iostream>
using namespace std;

class Z {
    int x;
    public:
    Z(int a) { x = a; };
    friend void showx(Z ob); // Δηλωση φιλη συναρτηση
};

void showx(Z obj) // Υλοποιηση φιλης συναρτηση

{
cout << obj.x; // προσβαση σε private μεταβλητη μελος xτου οbj 
}
int main()
{
Z ob(4); // Δηλωση αντικειμενου o (x = 4)
showx(ob); // Kληση της φιλης συναρτησης
return(0);
}
//