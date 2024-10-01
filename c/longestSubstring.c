#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int n = strlen(s);
    int maxLength = 0;
    int start = 0;
    int visited[256] = {0};

    for (int i = 0; i < n; i++) {
        if (visited[s[i]] == 1) {
            while (s[start] != s[i]) {
                visited[s[start]] = 0;
                start++;
            }
            start++;
        } else {
            visited[s[i]] = 1;
            int currentLength = i - start + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }
    }

    return maxLength;
}

int main() {
    char* s = "abcabcbb";
    int length = lengthOfLongestSubstring(s);
    printf("Length of the longest substring without repeating characters: %d\n", length);
    return 0;
}
