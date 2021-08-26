function diffArray(arr1, arr2) { // take two arrays, find if there are objects that dont appear in both and return them

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
    
    