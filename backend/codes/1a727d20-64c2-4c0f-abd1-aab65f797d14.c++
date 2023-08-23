#include <iostream>
#include <vector>
using namespace std;

void heapify(int arr[], int size, int index)

{

    int largest_value = index;

    int left = 2 * index + 1;

    int right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest_value])
    {

        largest_value = left;
    }

    if (right < size && arr[right] > arr[largest_value])
    {

        largest_value = right;
    }

    if (largest_value != index)

    {

        swap(arr[index], arr[largest_value]);

        heapify(arr, size, largest_value);
    }
}

void construct_heap(int arr[], int size)
{

    int last_non_leaf_node = (size / 2) - 1;

    for (int i = last_non_leaf_node; i >= 0; i--)
    {

        heapify(arr, size, i);
    }
}

void print_heap(int arr[], int size)
{

    cout << "Printing values at each node in heap" << endl;

    for (int i = 0; i < size; i++)
    {

        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{

    int arr[] = {3, 5, 8, 10, 17, 11, 13, 19, 22, 24, 29};

    int size = sizeof(arr) / sizeof(arr[0]);

    construct_heap(arr, size);

    print_heap(arr, size);

    int key = 5;
    int key_index = -1;
    for (int i = 0; i < size; i++)
    {
        if (key == arr[i])
        {
            key_index = i;
            cout << "Element is found at index " << i << " ";
            break;
        }
    }
    if (key_index == -1)
    {
        cout << "Element is not found\n";
    }
    else
    {
        int t = key_index;
        vector<int> path;
        cout << "\nPath: ";
        while (t >= 0)
        {
            // cout << t << " ";
            path.push_back(t);
            if (t % 2 != 0)
            {
                t = (t - 1) / 2;
            }
            else
            {
                t = (t - 2) / 2;
            }
        }
        for (int i = path.size()-1; i >= 0; i--)
        {
            cout << path[i] << " ";
        }
        cout<<endl;
    }
    return 0;
}