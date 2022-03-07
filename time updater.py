from datetime import datetime, timedelta, date
import tweepy
import sys
CONSUMER_KEY=sys.argv[1]
CONSUMER_SECRET=sys.argv[2]
access_token = sys.argv[3]
access_token_secret = sys.argv[4]
tester = sys.argv[5]
ass = open("time.txt","r")
arse = ass.read()
x = arse[:arse.find(" ")]
today = date.today()
ass.close()
print(tester)
print("\n\n\n\nTime get from git        : {}\nCurrent Time             : {}".format(x,today.strftime("%m/%d/%Y")))
if(x == today.strftime("%m/%d/%Y")):
    date_1 = datetime.strptime(x, "%m/%d/%Y")
    EndDate = date_1+timedelta(weeks=6)
    print("time processed by python : {}    \ntime after 6 weeks       : {}\n\n\n\n".format(date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y")))
    a = open("time.txt","w")
    a.write(EndDate.strftime("%m/%d/%Y")+" 20:00:00 +00:00")
    a.close()

    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)
    msg = '''
----- Time update report -----
Current time (UTC): {}
Last update date  : {}
Processed time    : {}
Next update time  : {}
------------------------------
'''.format(today.strftime("%m/%d/%Y"),x,date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y"),)
    msg_sim = "Time updated\nFrom: {}\nTo: {}".format(date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y"))
    api.send_direct_message(876283042863632384, msg)
    api.send_direct_message(876283042863632384, msg_sim)
    api.send_direct_message(2212073618, msg_sim)
else:
    print("\nNo time change needed\n\n\n\n")
