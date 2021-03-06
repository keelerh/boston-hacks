// template:
//bug = {href: "", username: "", title: "", compensation: "", language: "", twitterDesc: "", fullDesc: "", code: "", datePosted: ""};

demoBug = {href: "js", username: "Frank Sinatra", title: "Struggling to make string lowercase", compensation: "1.50",
  language: "JavaScript",
  twitterDesc: "I have a simple function to make a string lowercase, but for some reason it isnt working.",
  fullDesc: "In my project I want to compare email addresses and I don't care if the email is upper or lower case and want it to match in either case. I can't figure out how to write this function :( Any help would be greatly appeciated!)",
  code: "function lowercase(word) {\r\n    var littleWord;\r\n    for (letter in word) {\r\n        var littleLetter = letter.toLower();\r\n        littleWord.append(littleLetter);\r\n    }\r\n    return littleWord;\r\n  }",
  datePosted: "April 29, 2017",
  test: "function test() {\r\n  var word = MixEdcaseWOrd;\r\n  var result = makeLittle(MixEdcaseWOrd);\r\n  return result == mixedcaseword;\r\n}"
};

twilioBug = {href: "twilio", username: "Tamar Weseley", title: "Twilio Help!", compensation: "5",
  language: "JavaScript",
  twitterDesc: "Issue when using Twilio API - can't get text messages to go through.",
  fullDesc: "I am currently trying to use Twilio with my Thingworx platform to send sms messages when a sensor becomes triggered. When I set the sensor to an active triggered state, the sms messages then spam me and do not turn off until i set it to a false manually. If I disable this feature, text messages do not go through at all. How can I fix this??",
  code: "\/\/require the Twilio module and create a REST client\r\nvar client = require(\'..\/lib\')(\'ACCOUNT_SID\', \'AUTH_TOKEN\');\r\n\r\n\/\/Send an text message\r\nclient.sendMessage({\r\n\r\n    to: \'+16515556677\', \/\/ Any number Twilio can deliver to\r\n    from: \'+14506667788\', \/\/ A number you bought from Twilio and can use for outbound communication\r\n    body: \'word to your mother.\' \/\/ body of the SMS message\r\n\r\n}, function(err, responseData) { \/\/this function is executed when a response is received from Twilio\r\n\r\n    if (!err) { \/\/ \"err\" is an error received during the request, if any\r\n\r\n        \/\/ \"responseData\" is a JavaScript object containing data received from Twilio.\r\n        \/\/ A sample response from sending an SMS message is here (click \"JSON\" to see how the data appears in JavaScript):\r\n        \/\/ http:\/\/www.twilio.com\/docs\/api\/rest\/sending-sms#example-1\r\n\r\n        console.log(responseData.from); \/\/ outputs \"+14506667788\"\r\n        console.log(responseData.body); \/\/ outputs \"word to your mother.\"\r\n\r\n    }\r\n\r\n});\r\n\r\n\/\/Send a message with content (MMS)\r\nclient.messages.post({\r\n\r\n    to: \'+16515556677\', \/\/ Any number Twilio can deliver to\r\n    from: \'+14506667788\', \/\/ A number you bought from Twilio and can use for outbound communication\r\n    body: \'Kind sir, won\\\'t you instruct me how to douglas?\',\r\n    mediaUrl: \'http:\/\/cdn.memegenerator.co\/images\/200x\/42.jpg\'\r\n\r\n}, function (err, responseData) {\r\n\r\n    console.log(responseData);\r\n\r\n});\r\n\r\n\/\/Place a phone call, and respond with TwiML instructions from the given URL\r\nclient.makeCall({\r\n\r\n    to: \'+16515556677\', \/\/ Any number Twilio can call\r\n    from: \'+14506667788\', \/\/ A number you bought from Twilio and can use for outbound communication\r\n    url: \'http:\/\/www.example.com\/twiml.php\' \/\/ A URL that produces an XML document (TwiML) which contains instructions for the call\r\n\r\n}, function(err, responseData) {\r\n\r\n    \/\/executed when the call has been initiated.\r\n    console.log(responseData.from); \/\/ outputs \"+14506667788\"\r\n\r\n});",
  datePosted: "May 18, 2016"
};

dbBug = { href: "db", username: "Keeley Erhardt", title: "Failed Django response to Ajax", compensation: "15",
  language: "Python",
  twitterDesc: "Django not response to Ajax call while doing a computing intensive task",
  fullDesc: "I am recently using Django to program my web interface for my scientific computing engine. I wrap the computing engine as a python module and call it inside the Django Framework. The compute() function of the engine takes several minutes to run (I use ajax to trigger it) , at the same time, I let the front-end make extra ajax call every 0.5 second to update the CPU and Memory status to the front-end. But I find the server is not respond to the extra ajax call until the compute() finishes.",
  code: "AJAX_PK_ATTR_NAME = getattr(settings, \'AJAX_PK_ATTR_NAME\', \'pk\')\r\n\r\n\r\ndef _fields_from_model(model):\r\n    return [field.name for field in model.__class__._meta.fields]\r\n\r\n\r\nclass DefaultEncoder(object):\r\n    _mapping = {\r\n        \'IntegerField\': int,\r\n        \'PositiveIntegerField\': int,\r\n        \'AutoField\': int,\r\n        \'FloatField\': float,\r\n    }\r\n\r\n    def to_dict(self, record, expand=False, html_escape=False, fields=None):\r\n        self.html_escape = html_escape\r\n        if hasattr(record, \'__exclude__\') and callable(record.__exclude__):\r\n            try:\r\n                exclude = record.__exclude__()\r\n                if fields is None:\r\n                    fields = _fields_from_model(record)\r\n                fields = set(fields) - set(exclude)\r\n            except TypeError:\r\n                pass\r\n        data = serializers.serialize(\'python\', [record], fields=fields)[0]\r\n\r\n        if hasattr(record, \'extra_fields\'):\r\n            ret = record.extra_fields\r\n        else:\r\n            ret = {}\r\n\r\n        ret.update(data[\'fields\'])\r\n        ret[AJAX_PK_ATTR_NAME] = data[\'pk\']",
  datePosted: "June 15, 2015"
};

jsModalBug = { href: "modals", username: "Billy Joe Bob", title: "JS Modals", compensation: "20",
  language: "JavaScript",
  twitterDesc: "Can't figure out how to initialize my database.",
  fullDesc: "Can i have multiple modals with the same JS file and same classes and ids? I tried to use the above code in the ofertare.php file and i want to use this modal in comanda.php file but with other content and it is not opening the modal in the comanda.php file. Help",
  code: "\/\/ Get the modal\r\nvar modal = document.getElementById(\'myModal\');\r\n\r\n\/\/ Get the button that opens the modal\r\nvar btn = document.getElementById(\"myBtn\");\r\n\r\n\/\/ Get the <span> element that closes the modal\r\nvar span = document.getElementsByClassName(\"close\")[0];\r\n\r\n\/\/ When the user clicks on the button, open the modal\r\nbtn.onclick = function() {\r\n    modal.style.display = \"block\";\r\n}\r\n\r\n\/\/ When the user clicks on <span> (x), close the modal\r\nspan.onclick = function() {\r\n    modal.style.display = \"none\";\r\n}\r\n\r\n\/\/ When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = function(event) {\r\n    if (event.target == modal) {\r\n        modal.style.display = \"none\";\r\n    }\r\n}",
  datePosted: "March 15, 2017"
};

dBug = { href: "modals", username: "Sally123", title: "Passing PHP variables around", compensation: "10",
  language: "PHP",
  twitterDesc: "how do i pass a php variable to < script data-x-y-z =“”> </script>?.",
  fullDesc: "Can i have multiple modals with the same JS file and same classes and ids? I tried to use the above code in the ofertare.php file and i want to use this modal in comanda.php file but with other content and it is not opening the modal in the comanda.php file. Help",
  code: "<script \r\n\r\n data-transaction-total-amount=\" what do i put here ?\"><\/script>import PubNubCore from \'..\/core\/pubnub-common\';\r\nimport Networking from \'..\/networking\';\r\nimport Database from \'..\/db\/common\';\r\nimport { get, post } from \'..\/networking\/modules\/web-node\';\r\nimport { keepAlive, proxy } from \'..\/networking\/modules\/node\';\r\nimport { InternalSetupStruct } from \'..\/core\/flow_interfaces\';\r\n\r\nexport default class extends PubNubCore {\r\n  constructor(setup: InternalSetupStruct) {\r\n    setup.db = new Database();\r\n    setup.networking = new Networking({ keepAlive, get, post, proxy });\r\n    setup.sdkFamily = \'Nodejs\';\r\n    super(setup);\r\n  }\r\n}",
  datePosted: "March 10, 2017"
};

consumerQBug = { href: "queues", username: "Jessica Simpson", title: "Producer access queue problems", compensation: "50",
  language: "C",
  twitterDesc: "Multiple consumer single producer access queue concurrency issues.",
  fullDesc: "I have a common queue in which a single producer(customer) thread place costumer orders produced by child process and multiple or single consumer(cashier) thread which can take order and remove them from queue. But we have also conditions that producer(customer) thread won’t try to add order in to the queue if it’s full and that the consumer(cashier) thread won’t try to remove order from an empty queue. I done my code but there is certain problems. I can confirm that program is not running fine first of all sometime multiple cashier can take same order which will be taken by a single cashier and when I press CLRT+C child process should stop creating orders and cashier thread remains continue but it is also not happening.",
  code: "\/\/ Get the modal\r\nvar modal = document.getElementById(\'myModal\');\r\n\r\n\/\/ Get the button that opens the modal\r\nvar btn = document.getElementById(\"myBtn\");\r\n\r\n\/\/ Get the <span> element that closes the modal\r\nvar span = document.getElementsByClassName(\"close\")[0];\r\n\r\n\/\/ When the user clicks on the button, open the modal\r\nbtn.onclick = function() {\r\n    modal.style.display = \"block\";\r\n}\r\n\r\n\/\/ When the user clicks on <span> (x), close the modal\r\nspan.onclick = function() {\r\n    modal.style.display = \"none\";\r\n}\r\n\r\n\/\/ When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = function(event) {\r\n    if (event.target == modal) {\r\n        modal.style.display = \"none\";\r\n    }\r\n}",
  datePosted: "April 22, 2017"
};

aBug = { href: "queues", username: "George Washington", title: "Core dump struggles :(", compensation: "70",
  language: "Assembly",
  twitterDesc: "I keep getting a core dump :()",
  fullDesc: "I have a common queue in which a single producer(customer) thread place costumer orders produced by child process and multiple or single consumer(cashier) thread which can take order and remove them from queue. But we have also conditions that producer(customer) thread won’t try to add order in to the queue if it’s full and that the consumer(cashier) thread won’t try to remove order from an empty queue. I done my code but there is certain problems. I can confirm that program is not running fine first of all sometime multiple cashier can take same order which will be taken by a single cashier and when I press CLRT+C child process should stop creating orders and cashier thread remains continue but it is also not happening.",
  code: "\t;;  nasm -f bin -o tiny32 tiny32.asm\r\n\tBITS 32\r\n\t                org     0x08048000\r\n\r\nehdr:\t\t\t\t; Elf32_Ehdr\r\n\t                db      0x7F, \"ELF\", 1, 1, 1, 0\t;   e_ident\r\n\t        times 8 db      0\r\n\t                dw      2 ;   e_type\r\n\t                dw      3 ;   e_machine\r\n\t                dd      1 ;   e_version\r\n\t                dd      _start ;   e_entry\r\n\t                dd      phdr - $$ ;   e_phoff\r\n\t                dd      0\t  ;   e_shoff\r\n\t                dd      0\t  ;   e_flags\r\n\t                dw      ehdrsize  ;   e_ehsize\r\n\t                dw      phdrsize  ;   e_phentsize\r\n\t                dw      1\t  ;   e_phnum\r\n\t                dw      0\t  ;   e_shentsize\r\n\t                dw      0\t  ;   e_shnum\r\n\t                dw      0\t  ;   e_shstrndx\r\n\r\n\t  ehdrsize      equ     $ - ehdr\r\n\r\nphdr:\t\t\t\t; Elf32_Phdr\r\n\t                dd      1 ;   p_type\r\n\t                dd      0 ;   p_offset\r\n\t                dd      $$ ;   p_vaddr\r\n\t                dd      $$ ;   p_paddr\r\n\t                dd      filesize ;   p_filesz\r\n\t                dd      filesize ;   p_memsz\r\n\t                dd      5\t ;   p_flags\r\n\t                dd      0x1000\t ;   p_align\r\n\r\n\t  phdrsize      equ     $ - phdr\r\n\r\n_start:\r\n\t  mov al, 1     \t; sys_exit\r\n\t  mov bl, 42    \t; int status\r\n\t  int 0x80\r\n\r\n\tfilesize      equ     $ - $$",
  datePosted: "January 21, 2017"
};

bBug = { href: "queues", username: "Mr. Bill", title: "Error handling in Go", compensation: "5",
  language: "Go",
  twitterDesc: "Help! I don't know how to do error handling in Go!!!.",
  fullDesc: "I have a common queue in which a single producer(customer) thread place costumer orders produced by child processI'm just getting started with Go. My code is starting to have a lot of this:",
  code: "   if err != nil {\r\n      \/\/handle err\r\n   } if err := rows.Scan(&some_column); err != nil {\r\n      \/\/handle err\r\n  }import PubNubCore from \'..\/core\/pubnub-common\';\r\nimport Networking from \'..\/networking\';\r\n \'..\/core\/flow_interfaces\';\r\n\r\nexport default class extends PubNubCore {\r\n  constructor(setup: InternalSetupStruct) {\r\n    setup.db = new Database();\r\n    setup.networking = new Networking({ keepAlive, get, post, proxy });\r\n    setup.sdkFamily = \'Nodejs\';\r\n    super(setup);\r\n  }\r\n}",
  datePosted: "April 10, 2017"
};

bugs = [twilioBug, aBug, bBug, dbBug, demoBug, jsModalBug, dBug, consumerQBug];
