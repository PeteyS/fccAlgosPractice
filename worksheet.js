function diffArray(arr1, arr2) { // take two arrays, find if there are objects that dont appear in both and return them in an array
    let spreadArr = [...arr1,...arr2]; //spread the two arrays into one array
    let count = 0; //create count for while loop
    let arrSwitch = 0; //switch to see if 
    let returnArr = []; //the objects that didnt appear in both arrays
    
      for (let i = 0; i<=spreadArr.length;i++){ //loop that iterates over the combined arrays
    
        while (count<=spreadArr.length){ //if count has iterated over array once
          if (i == count){ //if count and array are same, that means comparison number and comapred number will be the same object, so add one to count to avoid
            count+=1;
          }
    
          if (spreadArr[i] == spreadArr[count]){ //if the object we are comparing has a clone
            arrSwitch = 1; //add one to switch so we know not to push it to return array
            break; //break out of loop and onto the next object
          }else{
            count +=1; //else move onto next object by adding one to the count
          }
        }
    
        if (arrSwitch ==0){ //if arrSwitch is 0, that means do duplicates were found
          returnArr.push(spreadArr[i]); //so we can push the number to the returnArr since is only appears once
        }
    
        count = 0; //reset count, so we can compare fromt the start
        arrSwitch = 0; //reset arrSwitch to zero, in case we found a duplicate, since the if statement makes it one
    
      }
      
    return returnArr;
    }

    function destroyer(arr) { //given an array an arguments, check each item in array agianst arguments. If object in array is one of the arguments, remove it from the array
      let lengthArr = arguments[0].length; //this is the length of the passed array
      let lengthArguments = arguments.length; // this is the length of the arguments
    
      for (let i=1;i<lengthArguments;i++){ //for loop to iterate through the arguments.i starts at one to pass the array
    
        for(let k=0;k<lengthArr;k++){ //for loop to iterate over array
    
          if(arr[k] == arguments[i]){ //if object in array at k index is a destroyer argument
            arr.splice(k,1); //remove that object
            --k; //minus one from k, because we removed an object, so everything moves back one
            --lengthArr; //minus one from lengthArr for the same reasons we minus everything from k
          }
        }
      }
      return arr;//return arr
    }
    
    function whatIsInAName(collection, source) { //given source key and value pairs, find the key value pairs inside dictionaries inside collection that have all of the source keys and value pairs and return the whole dictionary that contain those
      var arr = [];//return arr, will append found dictionaries here
      let sourceCount = Object.keys(source).length; // amount of keys in source
      let sourceCountPush = Object.keys(source).length; //value amount of key objects. Everytime a value pair is found, minus one from sCP
      let amountInArr = collection.length; //amount of dictionarys in array
      let matchFound = false; //used to see if a match has been found
     
      for (let i=0;i<amountInArr;i++){ //iteration over total number of dictionarys in array
      let amountInEachDic = Object.keys(collection[i]).length; //create amount in each dictionary variable, easier to read
    
        for (let j=0;j<amountInEachDic;j++){ //iteration over each item in specific dictionary
    
          for (let k=0;k<sourceCount;k++){ //compare each item in dictionary to source keys to see if match
            let collectName = Object.keys(collection[i])[j]; //easier to read, create collection key variable
            let sourceName = Object.keys(source)[k];//easier to read, create source key variable
    
            if (collectName == sourceName){ //if key names are same
            let collectVal = collection[i][collectName];//easier to read, create collection value variable
            let sourceVal = source[sourceName];//see above
    
              if(collectVal == sourceVal){ //if the values are the same
                --sourceCountPush; //minus one from sourceCountPush because match has been found
                if(sourceCountPush == 0){//sCP is zero because the total amount of keys in source has been found
                  matchFound = true;//set matchFound to true
                  break;//and exit the loop
                }
              }
            }
          }
          if (matchFound == true){//if a match has been found, no need to iterate rest of dictionary
            break;//just exit
          }
        }
      if (matchFound == true){//since match is found
        arr.push(collection[i]);//add the dictionary to return array
      }
      sourceCountPush=Object.keys(source).length; //reset the sourceCountPush variable
      matchFound = false; //reset matchFound variable
      }
    return arr;
    }
    
    function spinalCase(str){ //convert a string sentence with no punctuation to spinal case. New words can begin with capital and string can have no spaces
      str = str.replace(/[_]/g,""); //replace all underscores with empty space
    
      let length = str.length;//make length a variable so we can change it
    
      for (let i = 1; i<length;i++){ //iterate over the string

        if (str[i] == str[i].toUpperCase() && str[i-1] == str[i-1].toLowerCase() && str[i-1] != " " && str[i] != " "){//if letter is captial and letter before it is lowercase
          str = str.slice(0,i) + " " + str.slice(i); // add a space before capital letter
          length+=1; //add one to length, since we added a space
        }
      }
      str = str.replace(/[-]/g,""); //replace all instances of dashes, so we dont get duplicates
      str = str.split(" ").join("-").toLowerCase();//split the str at spaces and add dashes
      return str; //return the string
    }
    
    function translatePigLatin(str) { //takes on letter case word and return it in pig latin
      let ay = ""; //will be used to find how many consonants a word starts with
    
      if (str[0] == "a" ||str[0] == "e" ||str[0] == "i" ||str[0] == "o" ||str[0] == "u"){ //if words beings with vowel
        return str+"way";
      }
    
      for(let i =0;i<str.length;i++){ //iterate over word to find number of consonants
        if (str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u"){ //if word reaches a vowel
          break; //get out
        }
        else{//otherwise
          ay = ay + str[i]; //add that letter to ay
        }
      }
      return str.slice(ay.length) + ay + "ay"; //return the word with whats in ay removed from the front, add whats in ay to the back and finish with the string 'ay'
    }

    function myReplace(str, before, after) { //replace second argument with third argument, if second argument starts with capital letter, make sure replaced becomes capital, and the opposite is also true

      if (before[0] == before[0].toUpperCase()){ //check to see if first letter is uppercase
        return str.replace(before,after[0].toUpperCase()+after.slice(1));//if it is, replace first letter of replacement with capital
      }else if (before[0] == before[0].toLowerCase()){ //if its lower case, do the opposite
        return str.replace(before,after[0].toLowerCase()+after.slice(1));
      }
      
    }
    function fearNotLetter(str) { //find the missing letter in the range and return it
      let alpha = 'abcdefghijklmnopqrstuvwxyz'; //full alphabet, used to compare range with
      let index = alpha.indexOf(str[0]); //find what letter the passed in parameter starts at

      for (let i=0;i<str.length;i++){ //iterate through the whole range

        if (alpha[index] == str[i]){ //if alphabet at same count is equal to the str then everythings in order
          index+=1;
        }
        else if (alpha[index] != str[i]){ //otherwise, this is the missing letter
          return (alpha[index]);
        }else{
          return undefined; //if everything is in order, return undefined
        }
      }
    }
    function uniteUnique(arr) { //add all the unique objects into an array in the same order that they appear
      let newArr = []; //this will be the array we push to
    
      for (let i=0;i<arguments.length;i++){ //iterate to push all arguments into the new array, since we dont know all the arguments
        newArr.push(...arguments[i]); 
      }
    
      for (let i = newArr.length-1; i>=0;i--){ //iterate through the whole newArray to get rid of the reoccuring objects(we're going backwards through the array)
    
        for (let k = i-1;k>=0;k--){ //compare each object to the objects it its left in the array
          if (newArr[k] == newArr[i]){ //if the object appears somewhere to the object of interest's left
            newArr.splice(i,1); //remove the object of interest as that object appears somewhere to its left
          }
        }
      }
      return newArr; //return the newArray
    }
    function sumFibs(num) { //create a fib function that adds all the odd fib numbers that are equal or below the parameter
      let a = 1; // a will take the updated sum
      let b = 0; // b will take the old number
      let temp,sum = 0,check = num; //temp is temp storage of old a to be put into new b
    
      while (num>=0){ //until we hit zero
        temp = a; //temp becomes a
        a = a + b; // a becomes the sum of a+b
        b = temp; //b becomes what a used to be 
        if (b%2 != 0 && b<= check){ //if b is odd and b is less than or equal to check
          sum+=b; //add b to sum
        }
        else if (b>check){ //if b is greater than check
          return sum; //return sum since we don't need to find any other fib numbers
        }
        --num; //reduce num by one
      }
      return sum;
    }