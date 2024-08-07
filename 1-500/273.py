def numberToWords(self, num: int) -> str:
        if(num == 0): 
            return('Zero')
        num = str(num)
        addLength = len(num) % 3
        addLength = 3 - addLength if addLength > 0 else 0
        num = "0" * addLength + num
        response = []

        for i in range (0,len(num),3):
            value = []
            single = {
                '1': 'One', '2': 'Two', '3': "Three", '4': "Four", '5': 'Five',
                '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', '10': 'Ten',
                '11': 'Eleven', '12': 'Twelve', '13': 'Thirteen', '14': 'Fourteen', '15': 'Fifteen',
                '16': 'Sixteen', '17': 'Seventeen', '18': 'Eighteen', '19': 'Nineteen' , '0': ''
            }
            double = {
                '2': 'Twenty', '3': 'Thirty', '4': 'Forty', '5': 'Fifty',
                '6': 'Sixty', '7': 'Seventy', '8': 'Eighty', '9': 'Ninety', '0': ''
            }
            
            if(single[num[i]] != ''):
                value.append( (single[num[i]] + ' Hundred') )
            if(num[i+1] == '1'):
                value.append( (single[num[i+1] + num[i+2]]) )
            else:
                if(double[num[i+1]] != ''): 
                    value.append(double[num[i+1]])
                if(single[num[i+2]] != ''): 
                    value.append(single[num[i+2]])
            if(len(value) > 0):
                response.append(" ".join(value))
            else:
                response.append('')
        n = len(response)
        extension = {
            4: ' Billion', 3: ' Million', 2: ' Thousand', 1: ''
        }
        for i in range(n):
            if(response[i] != ''):
                response[i] += extension[n-i]
        finalStr = ''
        for i in response:
            if(i != ''):
                finalStr += (i+' ')
        return finalStr.strip()
