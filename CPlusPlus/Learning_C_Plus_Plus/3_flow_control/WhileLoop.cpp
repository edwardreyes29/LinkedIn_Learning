#include <iostream>
#include <ctime>
#include <cstdlib>
using namespace std;

int main() {
    int userChoice = 0;
    do {
        cout << "Hello welcome to my menu\n";
        cout << "Please choose one fo the following options \n";
        cout << "1. continue\n";
        cout << "2. quit\n";
        cin >> userChoice;
    } while (userChoice == 1);
}