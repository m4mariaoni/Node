// Write function below
function subLength(str, char) {
    // Count occurrences of the character
    const a = str.split(char);
    const b = str.split(char).length;
    const count = str.split(char).length - 1;
  
    // Check if there are exactly 2 occurrences
    if (count !== 2) {
      return 0;
    }
  
    // Find the indices of the occurrences
    const firstIndex = str.indexOf(char);
    const secondIndex = str.lastIndexOf(char);
  
    // Calculate the length between them (including the characters)
    const length = secondIndex - firstIndex + 1;
  
    return length;
  }

  const a = subLength('Saturday', 'a');