public class Main
	{
		public static void main(String[] args) 
			{
               String sentence = "Pack my box with five dozen liquor jugs."; 
               boolean isPangram = isPangram(sentence);
               System.out.println("Yes this sentence a pangram is it ->  " + isPangram);
            }

        public static boolean isPangram(String sentence) 
			{
               boolean[] alphabet = new boolean[26]; 

        
               sentence = sentence.toLowerCase();

               for (char c : sentence.toCharArray()) 
				   {
                      if (c >= 'a' && c <= 'z') 
						  {
                             int index = c - 'a';
                             alphabet[index] = true;
                          }
                   }

               for (boolean isPresent : alphabet) 
				   {
                      if (!isPresent) 
						  {
                             return false; 
                          }
                   }

               return true; 
            }
    }