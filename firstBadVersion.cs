/* The isBadVersion API is defined in the parent class VersionControl.
      bool IsBadVersion(int version); */

public class Solution : VersionControl {
    public int FirstBadVersion(int n) {
        while (IsBadVersion(n-1)){
            n--;
        }
        return n;
    }
}