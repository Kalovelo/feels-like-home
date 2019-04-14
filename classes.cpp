#include <iostream>
using namespace std;


class coord {
public:
    int x;
    int y;
    coord(){};
    coord(int a, int b) { x = a; y = b; };
};

class foo 
{
    
    int x;          //private
    public:

        coord co; // αντικειμενο τυπου coord


        int readx(); //methodos pou tha oloklirwthei meta

        void set(int w) //inline methodos
        {   
            x = w;
        }

        foo(){};
        foo(int a,int b):x(a),co(a,b){}; //constructor kai gia coord class
        ~foo();//deconstructor

        void dsp(foo* p,int n)
        {
            for (int i=n-1;i>=0;i--)
            {
                cout<<p->x<<endl; //anti gia p.x,otan exoume pointer xrhsimopoioume -> 
                p++;
            }
        }

};

int foo :: readx()
{
    return(x);
}


foo::~foo()
{
    cout<<"the end."<<endl; //kaleite me to telos tou programmatos h me to telos if
}

int main(void)
{
    foo B[2], *p; // Δηλωση του πινακα
    B[0].set(17); // Αρχικες τιμες
    B[1].set(13); // ...
    p = B;
    p->dsp(p,2); // Εμφανιση με δεικτη
    if(5>3)
    {
        cout<<"==="<<endl;
        foo a;
        cout<<"if deconstructor : "<<endl;
    }
    cout<<"==="<<endl;
    cout<<"return deconstructor(2) : "<<endl;
    return(0);
}
// p34.cpp //