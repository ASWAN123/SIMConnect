const phones = {"_default": {"1": {"country": "Afghanistan", "phones": ["+93 077 670 4679", "+93 077 729 7775", "+93 077 155 7532", "+93 077 820 8132", "+93 077 779 6098", "+93 077 724 0161"]}, "2": {"country": "Aland Islands", "phones": ["+1-202-555-0184", "+1-202-555-0133", "+1-202-555-0199", "+1-202-555-0102", "+1-202-555-0126", "+1-202-555-0101"]}, "3": {"country": "Albania", "phones": ["+355 69 678 7952", "+355 69 388 9415", "+355 69 504 9687", "+355 69 551 7175", "+355 69 632 6566", "+355 69 673 7969"]}, "4": {"country": "Algeria", "phones": ["+213 5 006 9288", "+213 5 004 6003", "+213 5 858 9165", "+213 5 963 5900", "+213 5 533 8672", "+213 5 951 3935"]}, "5": {"country": "American Samoa", "phones": ["+1-202-555-0101", "+1-202-555-0113", "+1-202-555-0160", "+1-202-555-0190", "+1-202-555-0169", "+1-202-555-0158"]}, "6": {"country": "Andorra", "phones": ["+376 355 972 3381", "+376 355 282 7542", "+376 355 565 6653", "+376 355 044 3939", "+376 355 032 4001", "+376 355 446 7328"]}, "7": {"country": "Angola", "phones": ["+244 0915 862 2716", "+244 0915 187 7702", "+244 0915 721 3859", "+244 0915 234 4995", "+244 0915 693 9045", "+244 0915 166 2468"]}, "8": {"country": "Anguilla", "phones": ["+1 264 092 1970", "+1 264 584 3429", "+1 264 521 3472", "+1 264 590 7681", "+1 264 981 7923", "+1 264 226 9785"]}, "9": {"country": "Antigua and Barbuda", "phones": ["+1-202-555-0156", "+1-202-555-0145", "+1-202-555-0128", "+1-202-555-0147", "+1-202-555-0110", "+1-202-555-0135"]}, "10": {"country": "Argentina", "phones": ["+54 9 290 7277", "+54 9 843 2327", "+54 9 371 9202", "+54 9 237 7312", "+54 9 746 8631", "+54 9 704 3678"]}, "11": {"country": "Armenia", "phones": ["+374 094 839 3885", "+374 094 441 2022", "+374 094 442 7264", "+374 094 379 0693", "+374 094 486 4508", "+374 094 415 2732"]}, "12": {"country": "Aruba", "phones": ["+297 58 933 8208", "+297 58 467 8947", "+297 58 176 3105", "+297 58 908 3850", "+297 58 428 8280", "+297 58 811 9849"]}, "13": {"country": "Ascension Island", "phones": ["+1-202-555-0143", "+1-202-555-0174", "+1-202-555-0137", "+1-202-555-0113", "+1-202-555-0185", "+1-202-555-0136"]}, "14": {"country": "Australia", "phones": ["+61 004 593 9139", "+61 004 243 6634", "+61 004 642 1888", "+61 004 686 4642", "+61 004 974 8395", "+61 004 788 7823"]}, "15": {"country": "Australian Antarctic Territory", "phones": ["+1-202-555-0132", "+1-202-555-0191", "+1-202-555-0174", "+1-202-555-0106", "+1-202-555-0151", "+1-202-555-0190"]}, "16": {"country": "Austria", "phones": ["+43 660 258 7151", "+43 660 703 3556", "+43 660 625 3631", "+43 660 862 0118", "+43 660 936 8941", "+43 660 711 1439"]}, "17": {"country": "Azerbaijan", "phones": ["+994 055 964 6882", "+994 055 595 9961", "+994 055 642 7889", "+994 055 513 5614", "+994 055 883 7800", "+994 055 877 7184"]}, "18": {"country": "Bahamas", "phones": ["+1 788 378 1296", "+1 788 656 1686", "+1 788 752 6418", "+1 788 722 8567", "+1 788 837 6295", "+1 788 037 4495"]}, "19": {"country": "Bahrain", "phones": ["+973 344 301 4206", "+973 344 410 3306", "+973 344 200 9839", "+973 344 559 7413", "+973 344 356 4554", "+973 344 014 7092"]}, "20": {"country": "Bangladesh", "phones": ["+880 115 593 0384", "+880 115 766 6436", "+880 115 539 2826", "+880 115 627 4216", "+880 115 582 1607", "+880 115 021 6473"]}, "21": {"country": "Barbados", "phones": ["+1 246 859 9750", "+1 246 272 1870", "+1 246 730 7337", "+1 246 377 7259", "+1 246 870 5100", "+1 246 372 2966"]}, "22": {"country": "Belarus", "phones": ["+375 154 130 7716", "+375 154 124 4108", "+375 154 037 7749", "+375 154 023 4755", "+375 154 598 6813", "+375 154 657 3995"]}, "23": {"country": "Belgium", "phones": ["+32 456 496 6084", "+32 456 251 0096", "+32 456 178 9669", "+32 456 678 9369", "+32 456 713 4494", "+32 456 670 2262"]}, "24": {"country": "Belize", "phones": ["+501 886 9649", "+501 688 2579", "+501 075 4291", "+501 229 4483", "+501 848 0072", "+501 850 3166"]}, "25": {"country": "Benin", "phones": ["+229 955 081 3508", "+229 955 742 2940", "+229 955 561 8880", "+229 955 440 1937", "+229 955 478 1324", "+229 955 019 7147"]}, "26": {"country": "Bermuda", "phones": ["+1 441 112 5514", "+1 441 308 1853", "+1 441 268 7484", "+1 441 660 1718", "+1 441 625 3474", "+1 441 580 6012"]}, "27": {"country": "Bhutan", "phones": ["+975 17 306 4116", "+975 17 979 6240", "+975 17 200 3910", "+975 17 750 0594", "+975 17 304 9872", "+975 17 442 0411"]}, "28": {"country": "Bolivia", "phones": ["+591 755 880 7775", "+591 755 892 8176", "+591 755 057 0229", "+591 755 856 4269", "+591 755 295 6610", "+591 755 371 1929"]}, "29": {"country": "Bonaire", "phones": ["+599 774 6050", "+599 059 9788", "+599 044 8790", "+599 110 1165", "+599 784 0124", "+599 022 8597"]}, "30": {"country": "Bosnia and Herzegovina", "phones": ["+1-202-555-0182", "+1-202-555-0100", "+1-202-555-0176", "+1-202-555-0111", "+1-202-555-0119", "+1-202-555-0105"]}, "31": {"country": "Botswana", "phones": ["+267 176 2722", "+267 967 1328", "+267 658 4666", "+267 817 5590", "+267 794 7600", "+267 753 3340"]}, "32": {"country": "Brazil", "phones": ["+55 955 780 2624", "+55 955 955 3622", "+55 955 081 1950", "+55 955 143 8195", "+55 955 182 6714", "+55 955 373 0389"]}, "33": {"country": "British Virgin Islands", "phones": ["+1-202-555-0148", "+1-202-555-0168", "+1-202-555-0126", "+1-202-555-0141", "+1-202-555-0113", "+1-202-555-0101"]}, "34": {"country": "Brunei", "phones": ["+673 761 9446", "+673 444 7332", "+673 069 4624", "+673 621 8352", "+673 209 3984", "+673 201 4940"]}, "35": {"country": "Bulgaria", "phones": ["+359 2 630 6475", "+359 2 033 9488", "+359 2 761 1906", "+359 2 944 0798", "+359 2 379 8659", "+359 2 142 4541"]}, "36": {"country": "Burkina Faso", "phones": ["+1-202-555-0114", "+1-202-555-0154", "+1-202-555-0101", "+1-202-555-0190", "+1-202-555-0121", "+1-202-555-0149"]}, "37": {"country": "Burma", "phones": ["+95 02 569 3828", "+95 02 938 2620", "+95 02 884 7110", "+95 02 998 5007", "+95 02 808 7525", "+95 02 141 0944"]}, "38": {"country": "Burundi", "phones": ["+257 892 7297", "+257 817 7544", "+257 433 4309", "+257 941 4185", "+257 676 7809", "+257 091 2398"]}, "39": {"country": "Cambodia", "phones": ["+855 09 590 6905", "+855 09 112 9503", "+855 09 434 2010", "+855 09 743 7154", "+855 09 522 8883", "+855 09 852 6996"]}, "40": {"country": "Cameroon", "phones": ["+237 9 026 5467", "+237 9 682 8618", "+237 9 881 7561", "+237 9 341 7265", "+237 9 999 8644", "+237 9 550 1100"]}, "41": {"country": "Canada", "phones": ["324 5979", "978 0940", "928 0186", "000 7117", "044 2314", "340 9520"]}, "42": {"country": "Cape Verde", "phones": ["+1-202-555-0185", "+1-202-555-0146", "+1-202-555-0167", "+1-202-555-0146", "+1-202-555-0184", "+1-202-555-0104"]}, "43": {"country": "Cayman Islands", "phones": ["+1-202-555-0127", "+1-202-555-0137", "+1-202-555-0115", "+1-202-555-0181", "+1-202-555-0167", "+1-202-555-0168"]}, "44": {"country": "Central African Republic", "phones": ["+1-202-555-0138", "+1-202-555-0176", "+1-202-555-0124", "+1-202-555-0170", "+1-202-555-0160", "+1-202-555-0149"]}, "45": {"country": "Chad", "phones": ["+235 6 454 3817", "+235 6 462 8911", "+235 6 922 6768", "+235 6 115 1469", "+235 6 691 2313", "+235 6 474 2729"]}, "46": {"country": "Chile", "phones": ["+56 61 518 9896", "+56 61 962 9494", "+56 61 694 7282", "+56 61 227 5024", "+56 61 876 9591", "+56 61 880 9027"]}, "47": {"country": "China", "phones": ["+86 591 611 5288", "+86 591 086 8572", "+86 591 833 4072", "+86 591 830 4507", "+86 591 744 5621", "+86 591 498 2840"]}, "48": {"country": "Colombia", "phones": ["+57 350 988 2625", "+57 350 323 2207", "+57 350 902 8008", "+57 350 301 2690", "+57 350 790 6869", "+57 350 351 3153"]}, "49": {"country": "Comoros", "phones": ["+269 808 7933", "+269 245 4836", "+269 951 8838", "+269 108 5652", "+269 867 4862", "+269 238 6200"]}, "50": {"country": "Congo (Brazzaville)", "phones": ["+1-202-555-0111", "+1-202-555-0176", "+1-202-555-0107", "+1-202-555-0171", "+1-202-555-0184", "+1-202-555-0143"]}, "51": {"country": "Congo (Kinshasa)", "phones": ["+1-202-555-0186", "+1-202-555-0107", "+1-202-555-0181", "+1-202-555-0121", "+1-202-555-0197", "+1-202-555-0164"]}, "52": {"country": "Cook Islands", "phones": ["+1-202-555-0173", "+1-202-555-0189", "+1-202-555-0138", "+1-202-555-0122", "+1-202-555-0103", "+1-202-555-0129"]}, "53": {"country": "Costa Rica", "phones": ["+1-202-555-0132", "+1-202-555-0179", "+1-202-555-0121", "+1-202-555-0173", "+1-202-555-0164", "+1-202-555-0186"]}, "54": {"country": "Cote d'Ivoire", "phones": ["+1-202-555-0170", "+1-202-555-0108", "+1-202-555-0102", "+1-202-555-0157", "+1-202-555-0143", "+1-202-555-0125"]}, "55": {"country": "Croatia", "phones": ["+385 99 000 9007", "+385 99 080 7787", "+385 99 177 9787", "+385 99 976 4426", "+385 99 361 1366", "+385 99 102 9541"]}, "56": {"country": "Cuba", "phones": ["+53 555 782 8614", "+53 555 318 3776", "+53 555 967 3343", "+53 555 150 9636", "+53 555 607 3658", "+53 555 240 6475"]}, "57": {"country": "Curacao", "phones": ["+599 9 653 4797", "+599 9 094 7943", "+599 9 684 0603", "+599 9 772 9131", "+599 9 547 9673", "+599 9 652 0290"]}, "58": {"country": "Cyprus", "phones": ["+357 9 416 9126", "+357 9 109 1531", "+357 9 200 4672", "+357 9 271 7754", "+357 9 669 1087", "+357 9 365 0318"]}, "59": {"country": "Czech Republic", "phones": ["+1-202-555-0141", "+1-202-555-0142", "+1-202-555-0121", "+1-202-555-0158", "+1-202-555-0149", "+1-202-555-0140"]}, "60": {"country": "Denmark", "phones": ["+42 7 535 5903", "+42 7 482 1302", "+42 7 242 2177", "+42 7 365 0107", "+42 7 193 5354", "+42 7 504 0652"]}, "61": {"country": "Diego Garcia", "phones": ["+1-202-555-0113", "+1-202-555-0159", "+1-202-555-0196", "+1-202-555-0158", "+1-202-555-0139", "+1-202-555-0180"]}, "62": {"country": "Djibouti", "phones": ["+253 2 222 4069", "+253 2 030 3953", "+253 2 852 6114", "+253 2 065 3691", "+253 2 024 0236", "+253 2 587 2453"]}, "63": {"country": "Dominica", "phones": ["+1767 943 6218", "+1767 880 7322", "+1767 259 4941", "+1767 227 8293", "+1767 791 2434", "+1767 640 1504"]}, "64": {"country": "Dominican Republic", "phones": ["+1-202-555-0190", "+1-202-555-0142", "+1-202-555-0175", "+1-202-555-0126", "+1-202-555-0152", "+1-202-555-0105"]}, "65": {"country": "East Timor", "phones": ["+1-202-555-0122", "+1-202-555-0112", "+1-202-555-0184", "+1-202-555-0156", "+1-202-555-0153", "+1-202-555-0151"]}, "66": {"country": "Ecuador", "phones": ["+593 96 099 3462", "+593 96 331 0899", "+593 96 679 4441", "+593 96 091 0551", "+593 96 290 4762", "+593 96 638 7889"]}, "67": {"country": "Egypt", "phones": ["+20 117 453 4429", "+20 117 636 7179", "+20 117 046 3769", "+20 117 875 8236", "+20 117 647 0899", "+20 117 224 7400"]}, "68": {"country": "El Salvador", "phones": ["+1-202-555-0145", "+1-202-555-0114", "+1-202-555-0146", "+1-202-555-0187", "+1-202-555-0187", "+1-202-555-0107"]}, "69": {"country": "Eritrea", "phones": ["+291 384 7383", "+291 954 1103", "+291 683 4605", "+291 707 5226", "+291 221 6897", "+291 054 9690"]}, "70": {"country": "Estonia", "phones": ["+372 103 8409", "+372 069 9006", "+372 880 1511", "+372 451 2382", "+372 015 2745", "+372 998 2761"]}, "71": {"country": "Ethiopia", "phones": ["+251 11 477 7701", "+251 11 570 9330", "+251 11 190 9609", "+251 11 324 3314", "+251 11 252 9377", "+251 11 239 8403"]}, "72": {"country": "Falkland Islands", "phones": ["+1-202-555-0100", "+1-202-555-0112", "+1-202-555-0106", "+1-202-555-0176", "+1-202-555-0176", "+1-202-555-0170"]}, "73": {"country": "Faroe Islands", "phones": ["+1-202-555-0137", "+1-202-555-0165", "+1-202-555-0199", "+1-202-555-0109", "+1-202-555-0144", "+1-202-555-0197"]}, "74": {"country": "Fiji", "phones": ["+679 935 5731", "+679 441 6817", "+679 215 7437", "+679 325 7528", "+679 600 2794", "+679 533 9636"]}, "75": {"country": "Finland", "phones": ["+358 40 536 5901", "+358 40 654 7335", "+358 40 361 6974", "+358 40 314 8630", "+358 40 850 7221", "+358 40 290 2391"]}, "76": {"country": "France", "phones": ["+33 93 957 0976", "+33 93 329 8074", "+33 93 455 0826", "+33 93 333 4793", "+33 93 881 0829", "+33 93 458 2442"]}, "77": {"country": "French Antilles", "phones": ["+1-202-555-0153", "+1-202-555-0176", "+1-202-555-0104", "+1-202-555-0138", "+1-202-555-0151", "+1-202-555-0129"]}, "78": {"country": "French Guiana", "phones": ["+1-202-555-0196", "+1-202-555-0196", "+1-202-555-0120", "+1-202-555-0159", "+1-202-555-0172", "+1-202-555-0183"]}, "79": {"country": "French Polynesia", "phones": ["+1-202-555-0187", "+1-202-555-0142", "+1-202-555-0111", "+1-202-555-0157", "+1-202-555-0158", "+1-202-555-0102"]}, "80": {"country": "Gabon", "phones": ["+241 gabon 199 1725", "+241 gabon 796 0982", "+241 gabon 602 7603", "+241 gabon 594 6131", "+241 gabon 408 2841", "+241 gabon 774 0048"]}, "81": {"country": "Gambia", "phones": ["+220 538 5477", "+220 679 3154", "+220 153 1185", "+220 636 0566", "+220 038 6188", "+220 485 5204"]}, "82": {"country": "Georgia", "phones": ["+995 georgia555 801 2534", "+995 georgia555 414 3945", "+995 georgia555 727 8607", "+995 georgia555 004 7942", "+995 georgia555 903 6924", "+995 georgia555 627 4835"]}, "83": {"country": "Germany", "phones": ["+49 germany30 517 9222", "+49 germany30 964 6365", "+49 germany30 083 0947", "+49 germany30 682 9752", "+49 germany30 981 3608", "+49 germany30 723 0492"]}, "84": {"country": "Ghana", "phones": ["+233 30 784 5617", "+233 30 549 5402", "+233 30 026 3462", "+233 30 646 3035", "+233 30 953 5173", "+233 30 394 2525"]}, "85": {"country": "Gibraltar", "phones": ["+350 gibraltar 219 3568", "+350 gibraltar 879 7047", "+350 gibraltar 217 2056", "+350 gibraltar 144 8960", "+350 gibraltar 529 8496", "+350 gibraltar 979 4801"]}, "86": {"country": "Greece", "phones": ["+350 greece21 746 5755", "+350 greece21 329 1410", "+350 greece21 241 2376", "+350 greece21 624 0717", "+350 greece21 227 2534", "+350 greece21 479 0156"]}, "87": {"country": "Greenland", "phones": ["896 9667", "538 1737", "679 1400", "653 5228", "174 7619", "814 0818"]}, "88": {"country": "Grenada", "phones": ["+1 473 690 0833", "+1 473 213 1475", "+1 473 251 0012", "+1 473 516 5609", "+1 473 176 1530", "+1 473 691 9008"]}, "89": {"country": "Guadeloupe", "phones": ["+590 guadeloupe590 143 4906", "+590 guadeloupe590 493 6709", "+590 guadeloupe590 158 9532", "+590 guadeloupe590 581 4026", "+590 guadeloupe590 348 5608", "+590 guadeloupe590 074 4688"]}, "90": {"country": "Guam", "phones": ["+1 671 916 2030", "+1 671 704 5068", "+1 671 271 8880", "+1 671 196 1882", "+1 671 256 9521", "+1 671 950 1911"]}, "91": {"country": "Guatemala", "phones": ["+502 207 2312", "+502 896 5211", "+502 632 6084", "+502 359 5602", "+502 423 9859", "+502 977 9703"]}, "92": {"country": "Guinea", "phones": ["+224 guinea624 235 9762", "+224 guinea624 527 0651", "+224 guinea624 083 7153", "+224 guinea624 671 5119", "+224 guinea624 051 8341", "+224 guinea624 997 7441"]}, "93": {"country": "Guinea-Bissau", "phones": ["+245 224 0450", "+245 288 9275", "+245 184 6368", "+245 176 2907", "+245 281 8026", "+245 664 2698"]}, "94": {"country": "Guyana", "phones": ["+592 610 3905", "+592 459 0178", "+592 736 6535", "+592 844 2354", "+592 248 4897", "+592 184 4380"]}, "95": {"country": "Haiti", "phones": ["+509 039 2128", "+509 943 0718", "+509 540 2366", "+509 188 2073", "+509 141 3881", "+509 668 1518"]}, "96": {"country": "Honduras", "phones": ["+504 821 5003", "+504 884 0779", "+504 998 8069", "+504 707 4276", "+504 432 1871", "+504 024 7942"]}, "97": {"country": "Hong Kong", "phones": ["+1-202-555-0111", "+1-202-555-0130", "+1-202-555-0174", "+1-202-555-0167", "+1-202-555-0122", "+1-202-555-0183"]}, "98": {"country": "Hungary", "phones": []}, "99": {"country": "Iceland", "phones": ["+354 832 2515", "+354 265 1241", "+354 543 9461", "+354 936 8065", "+354 704 2551", "+354 286 2611"]}, "100": {"country": "India", "phones": ["+91 385 285 8866", "+91 385 648 0094", "+91 385 373 4738", "+91 385 058 3962", "+91 385 806 9195", "+91 385 876 7220"]}, "101": {"country": "Indonesia", "phones": ["+62 indonesia77 662 4947", "+62 indonesia77 501 0060", "+62 indonesia77 957 6576", "+62 indonesia77 871 3512", "+62 indonesia77 606 5634", "+62 indonesia77 340 8880"]}, "102": {"country": "Iran", "phones": ["+98 920 912 5053", "+98 920 034 9444", "+98 920 910 9298", "+98 920 822 0136", "+98 920 038 8441", "+98 920 701 1314"]}, "103": {"country": "Iraq", "phones": ["+964 72 728 3412", "+964 72 390 0355", "+964 72 921 9835", "+964 72 235 5658", "+964 72 937 8357", "+964 72 451 5355"]}, "104": {"country": "Ireland", "phones": []}, "105": {"country": "Israel", "phones": ["+972 55 362 7443", "+972 55 368 6084", "+972 55 523 3958", "+972 55 113 4508", "+972 55 531 4088", "+972 55 364 8877"]}, "106": {"country": "Italy", "phones": ["+39 06 698 0280", "+39 06 715 1585", "+39 06 128 5492", "+39 06 444 0326", "+39 06 546 5214", "+39 06 851 2361"]}, "107": {"country": "Jamaica", "phones": ["+1 879 084 9128", "+1 879 484 5673", "+1 879 271 4201", "+1 879 586 2714", "+1 879 958 4207", "+1 879 908 1388"]}, "108": {"country": "Japan", "phones": ["+81 75 426 7396", "+81 75 550 4017", "+81 75 022 9333", "+81 75 827 7402", "+81 75 184 2860", "+81 75 631 4807"]}, "109": {"country": "Jordan", "phones": ["+962 7 461 6535", "+962 7 713 2008", "+962 7 596 4241", "+962 7 761 3140", "+962 7 131 8353", "+962 7 874 3307"]}, "110": {"country": "Kazakhstan", "phones": ["+7 711 450 0774", "+7 711 597 5659", "+7 711 575 6771", "+7 711 940 2054", "+7 711 605 7684", "+7 711 930 0910"]}, "111": {"country": "Kenya", "phones": ["+7 kenya732 874 5549", "+7 kenya732 240 9928", "+7 kenya732 961 3193", "+7 kenya732 224 2255", "+7 kenya732 924 5408", "+7 kenya732 066 5223"]}, "112": {"country": "Kiribati", "phones": ["+686 kiribati 117 4201", "+686 kiribati 927 8944", "+686 kiribati 827 6415", "+686 kiribati 544 0613", "+686 kiribati 774 6059", "+686 kiribati 841 2051"]}, "113": {"country": "Kuwait", "phones": ["+965 2908 5530", "+965 2197 5204", "+965 2880 0912", "+965 2452 2578", "+965 2647 2585", "+965 2519 2321"]}, "114": {"country": "Kyrgyz Republic", "phones": ["+1-202-555-0147", "+1-202-555-0116", "+1-202-555-0143", "+1-202-555-0121", "+1-202-555-0192", "+1-202-555-0110"]}, "115": {"country": "Laos", "phones": ["+856 laos20 035 5022", "+856 laos20 359 3501", "+856 laos20 102 5321", "+856 laos20 248 7329", "+856 laos20 943 9855", "+856 laos20 126 7141"]}, "116": {"country": "Latvia", "phones": ["+371 latvia 995 6160", "+371 latvia 805 0792", "+371 latvia 606 3340", "+371 latvia 688 6952", "+371 latvia 453 4743", "+371 latvia 757 3080"]}, "117": {"country": "Lebanon", "phones": ["+961 lebanon76 130 8881", "+961 lebanon76 372 5443", "+961 lebanon76 478 3355", "+961 lebanon76 246 4342", "+961 lebanon76 550 9421", "+961 lebanon76 365 1595"]}, "118": {"country": "Lesotho", "phones": ["+266 lesotho 358 9633", "+266 lesotho 524 1801", "+266 lesotho 106 2993", "+266 lesotho 170 1971", "+266 lesotho 144 2518", "+266 lesotho 239 8113"]}, "119": {"country": "Liberia", "phones": ["+231 88 039 0323", "+231 88 374 7391", "+231 88 970 1944", "+231 88 330 4734", "+231 88 843 2269", "+231 88 357 1632"]}, "120": {"country": "Libya", "phones": ["+218 91 653 9457", "+218 91 102 0626", "+218 91 936 3181", "+218 91 061 8816", "+218 91 399 6021", "+218 91 029 0836"]}, "121": {"country": "Liechtenstein", "phones": ["+423 782 3511", "+423 615 7413", "+423 992 9854", "+423 855 9980", "+423 314 7739", "+423 140 2319"]}, "122": {"country": "Lithuania", "phones": ["+370 lithuania686 402 6418", "+370 lithuania686 888 7788", "+370 lithuania686 796 5770", "+370 lithuania686 454 2690", "+370 lithuania686 108 6519", "+370 lithuania686 557 2538"]}, "123": {"country": "Luxembourg", "phones": ["+370 luxembourg 967 3583", "+370 luxembourg 835 3820", "+370 luxembourg 556 6344", "+370 luxembourg 340 2964", "+370 luxembourg 308 1521", "+370 luxembourg 801 2052"]}, "124": {"country": "Macao", "phones": ["+853 macao 680 2164", "+853 macao 662 5728", "+853 macao 770 6820", "+853 macao 320 4610", "+853 macao 106 6570", "+853 macao 038 6036"]}, "125": {"country": "Macedonia", "phones": ["+389 2 991 2254", "+389 2 914 3474", "+389 2 267 2184", "+389 2 902 6341", "+389 2 885 7493", "+389 2 409 1950"]}, "126": {"country": "Madagascar", "phones": ["+261 247 4305", "+261 963 2064", "+261 290 1437", "+261 090 4658", "+261 913 0213", "+261 418 2817"]}, "127": {"country": "Malawi", "phones": ["+265 malawi 519 1170", "+265 malawi 643 8443", "+265 malawi 460 7275", "+265 malawi 352 9556", "+265 malawi 650 1237", "+265 malawi 731 7369"]}, "128": {"country": "Malaysia", "phones": ["+60 2 748 5176", "+60 2 776 0635", "+60 2 644 6762", "+60 2 733 5198", "+60 2 949 1441", "+60 2 221 6973"]}, "129": {"country": "Maldives", "phones": ["+960 545 4175", "+960 122 7475", "+960 623 7023", "+960 059 3610", "+960 214 1245", "+960 597 9429"]}, "130": {"country": "Mali", "phones": ["+223 mali 476 8693", "+223 mali 328 0335", "+223 mali 311 7257", "+223 mali 407 1578", "+223 mali 558 0902", "+223 mali 101 0339"]}, "131": {"country": "Malta", "phones": ["+356 malta 773 7286", "+356 malta 257 5117", "+356 malta 786 9106", "+356 malta 036 9406", "+356 malta 687 6935", "+356 malta 501 5888"]}, "132": {"country": "Marshall Islands", "phones": ["+1-202-555-0140", "+1-202-555-0195", "+1-202-555-0124", "+1-202-555-0153", "+1-202-555-0111", "+1-202-555-0117"]}, "133": {"country": "Martinique", "phones": ["+596 596 608 9193", "+596 596 473 1753", "+596 596 737 9381", "+596 596 123 8066", "+596 596 871 1466", "+596 596 385 7219"]}, "134": {"country": "Mauritania", "phones": ["+222 193 5295", "+222 475 5429", "+222 650 4353", "+222 011 7608", "+222 168 5757", "+222 194 1680"]}, "135": {"country": "Mauritius", "phones": ["+230 248 1410", "+230 831 6722", "+230 183 6722", "+230 988 1863", "+230 314 5463", "+230 403 5957"]}, "136": {"country": "Mayotte and Reunion", "phones": ["+1-202-555-0142", "+1-202-555-0165", "+1-202-555-0187", "+1-202-555-0103", "+1-202-555-0164", "+1-202-555-0191"]}, "137": {"country": "Mexico", "phones": ["+52 888 448 0697", "+52 888 818 3064", "+52 888 942 0604", "+52 888 998 6937", "+52 888 510 7139", "+52 888 458 4150"]}, "138": {"country": "Micronesia", "phones": ["+691 598 1934", "+691 133 4386", "+691 566 4813", "+691 676 9253", "+691 587 1492", "+691 498 7709"]}, "139": {"country": "Moldova", "phones": ["+373 moldova777 169 6610", "+373 moldova777 487 2065", "+373 moldova777 682 0872", "+373 moldova777 906 3895", "+373 moldova777 872 2585", "+373 moldova777 431 3630"]}, "140": {"country": "Monaco", "phones": ["+377 monaco 336 7273", "+377 monaco 308 0232", "+377 monaco 318 6717", "+377 monaco 859 7144", "+377 monaco 006 5468", "+377 monaco 166 2015"]}, "141": {"country": "Mongolia", "phones": ["+976 mongolia99 986 0547", "+976 mongolia99 212 7634", "+976 mongolia99 811 4260", "+976 mongolia99 266 5238", "+976 mongolia99 440 3311", "+976 mongolia99 814 6295"]}, "142": {"country": "Montenegro", "phones": ["+382 montenegro63 348 0384", "+382 montenegro63 135 8771", "+382 montenegro63 849 7868", "+382 montenegro63 728 6823", "+382 montenegro63 580 8313", "+382 montenegro63 550 4687"]}, "143": {"country": "Montserrat", "phones": ["+1 664 117 5937", "+1 664 085 1939", "+1 664 980 5570", "+1 664 724 4733", "+1 664 396 7123", "+1 664 193 9808"]}, "144": {"country": "Morocco", "phones": ["+212 61 665 6280", "+212 61 859 2345", "+212 61 949 6314", "+212 61 534 4920", "+212 61 909 0297", "+212 61 333 0221"]}, "145": {"country": "Mozambique", "phones": ["+27 84 353 2450", "+27 84 333 8930", "+27 84 857 3913", "+27 84 655 4736", "+27 84 056 2835", "+27 84 617 1353"]}, "146": {"country": "Myanmar", "phones": ["+95 myanmar99 101 0058", "+95 myanmar99 005 4496", "+95 myanmar99 501 0837", "+95 myanmar99 304 7417", "+95 myanmar99 381 9882", "+95 myanmar99 589 2875"]}, "147": {"country": "Namibia", "phones": ["+264 namibia63 822 5719", "+264 namibia63 554 3915", "+264 namibia63 628 7658", "+264 namibia63 097 0621", "+264 namibia63 185 0333", "+264 namibia63 680 7912"]}, "148": {"country": "Nauru", "phones": ["+674 941 2000", "+674 632 0814", "+674 125 0934", "+674 187 2874", "+674 222 2626", "+674 644 1564"]}, "149": {"country": "Nepal", "phones": ["+977 985 973 9335", "+977 985 133 0860", "+977 985 986 4067", "+977 985 746 8082", "+977 985 811 8693", "+977 985 732 4540"]}, "150": {"country": "Netherlands", "phones": ["+31 71 494 3794", "+31 71 461 6520", "+31 71 539 9027", "+31 71 003 5077", "+31 71 282 7766", "+31 71 241 3989"]}, "151": {"country": "New Caledonia", "phones": ["+1-202-555-0180", "+1-202-555-0100", "+1-202-555-0102", "+1-202-555-0166", "+1-202-555-0139", "+1-202-555-0100"]}, "152": {"country": "New Zealand", "phones": ["+1-202-555-0199", "+1-202-555-0106", "+1-202-555-0101", "+1-202-555-0137", "+1-202-555-0135", "+1-202-555-0165"]}, "153": {"country": "Nicaragua", "phones": ["+505 nicaragua 232 9402", "+505 nicaragua 217 7471", "+505 nicaragua 872 9127", "+505 nicaragua 392 6925", "+505 nicaragua 856 1679", "+505 nicaragua 870 4047"]}, "154": {"country": "Niger", "phones": ["+227 niger20 473 9606", "+227 niger20 988 8165", "+227 niger20 642 8426", "+227 niger20 502 7936", "+227 niger20 264 7383", "+227 niger20 375 1949"]}, "155": {"country": "Nigeria", "phones": ["+234 706 051 2726", "+234 706 714 7451", "+234 706 971 6977", "+234 706 824 2942", "+234 706 004 5043", "+234 706 379 3299"]}, "156": {"country": "North Korea", "phones": ["+1-202-555-0104", "+1-202-555-0114", "+1-202-555-0171", "+1-202-555-0188", "+1-202-555-0113", "+1-202-555-0199"]}, "157": {"country": "Northern Mariana Islands", "phones": ["+1-202-555-0114", "+1-202-555-0170", "+1-202-555-0121", "+1-202-555-0184", "+1-202-555-0118", "+1-202-555-0137"]}, "158": {"country": "Norway", "phones": ["+47 norway 617 2943", "+47 norway 796 2112", "+47 norway 862 0092", "+47 norway 423 1006", "+47 norway 206 5811", "+47 norway 285 4613"]}, "159": {"country": "Oman", "phones": ["+968 oman 918 2374", "+968 oman 181 3030", "+968 oman 053 0286", "+968 oman 387 3230", "+968 oman 304 9613", "+968 oman 661 3015"]}, "160": {"country": "Pakistan", "phones": ["+92 4999578", "+92 551 9669", "+92 715 7295", "+92 229 9774", "+92 279 3319", "+92 503 8924"]}, "161": {"country": "Palau", "phones": ["+680 197 6261", "+680 096 9627", "+680 898 7055", "+680 009 9715", "+680 160 3617", "+680 704 3371"]}, "162": {"country": "Palestine", "phones": ["+970 8 095 4340", "+970 8 430 7167", "+970 8 518 0496", "+970 8 191 1437", "+970 8 251 9511", "+970 8 395 7637"]}, "163": {"country": "Panama", "phones": ["+507 604 4759", "+507 662 8816", "+507 925 2018", "+507 008 4461", "+507 045 4919", "+507 405 0513"]}, "164": {"country": "Papua New Guinea", "phones": ["+1-202-555-0152", "+1-202-555-0191", "+1-202-555-0160", "+1-202-555-0174", "+1-202-555-0109", "+1-202-555-0168"]}, "165": {"country": "Paraguay", "phones": ["+595 paraguay985 315 4753", "+595 paraguay985 638 4038", "+595 paraguay985 363 9834", "+595 paraguay985 964 8395", "+595 paraguay985 183 3729", "+595 paraguay985 338 2399"]}, "166": {"country": "Peru", "phones": ["+51 peru41 353 3015", "+51 peru41 746 4852", "+51 peru41 279 1029", "+51 peru41 724 5897", "+51 peru41 557 2979", "+51 peru41 857 7214"]}, "167": {"country": "Philippines", "phones": ["+63 45 673 8950", "+63 45 728 6333", "+63 45 079 0951", "+63 45 089 6668", "+63 45 771 2286", "+63 45 369 3331"]}, "168": {"country": "Poland", "phones": ["+48 69 268 5787", "+48 69 911 6197", "+48 69 928 3341", "+48 69 044 8379", "+48 69 797 9016", "+48 69 800 3808"]}, "169": {"country": "Portugal", "phones": ["+351 portugal289 691 1480", "+351 portugal289 499 9113", "+351 portugal289 872 3442", "+351 portugal289 117 4258", "+351 portugal289 314 0010", "+351 portugal289 901 7863"]}, "170": {"country": "Puerto Rico", "phones": ["+1-202-555-0128", "+1-202-555-0126", "+1-202-555-0176", "+1-202-555-0123", "+1-202-555-0102", "+1-202-555-0102"]}, "171": {"country": "Qatar", "phones": ["+974 qatar 972 7531", "+974 qatar 453 9892", "+974 qatar 078 3127", "+974 qatar 432 5406", "+974 qatar 016 8842", "+974 qatar 389 4346"]}, "172": {"country": "Romania", "phones": ["+40 romania257 084 0484", "+40 romania257 040 3471", "+40 romania257 529 7398", "+40 romania257 854 7719", "+40 romania257 865 1044", "+40 romania257 273 2910"]}, "173": {"country": "Russia", "phones": ["+7 401 571 8009", "+7 401 554 7079", "+7 401 736 1381", "+7 401 765 8500", "+7 401 917 5189", "+7 401 742 4477"]}, "174": {"country": "Rwanda", "phones": ["+7 rwanda 855 1459", "+7 rwanda 497 4041", "+7 rwanda 839 4050", "+7 rwanda 049 5521", "+7 rwanda 208 3975", "+7 rwanda 681 2294"]}, "175": {"country": "Saba", "phones": ["+599 119 1627", "+599 242 5662", "+599 399 6060", "+599 096 1078", "+599 635 6123", "+599 508 2405"]}, "176": {"country": "Saint Helena and Tristan da Cunha", "phones": ["+1-202-555-0119", "+1-202-555-0192", "+1-202-555-0186", "+1-202-555-0156", "+1-202-555-0149", "+1-202-555-0197"]}, "177": {"country": "Saint Kitts and Nevis", "phones": ["+1-202-555-0105", "+1-202-555-0111", "+1-202-555-0165", "+1-202-555-0106", "+1-202-555-0189", "+1-202-555-0109"]}, "178": {"country": "Saint Lucia", "phones": ["+1-202-555-0155", "+1-202-555-0169", "+1-202-555-0118", "+1-202-555-0111", "+1-202-555-0199", "+1-202-555-0125"]}, "179": {"country": "Saint Pierre and Miquelon", "phones": ["+1-202-555-0104", "+1-202-555-0199", "+1-202-555-0145", "+1-202-555-0113", "+1-202-555-0140", "+1-202-555-0139"]}, "180": {"country": "Saint Vincent and the Grenadines", "phones": ["+1-202-555-0127", "+1-202-555-0136", "+1-202-555-0191", "+1-202-555-0150", "+1-202-555-0123", "+1-202-555-0101"]}, "181": {"country": "Samoa", "phones": ["+685 800 2812", "+685 220 4925", "+685 039 9943", "+685 070 4119", "+685 883 1384", "+685 595 9226"]}, "182": {"country": "San Marino", "phones": ["+1-202-555-0147", "+1-202-555-0159", "+1-202-555-0168", "+1-202-555-0137", "+1-202-555-0107", "+1-202-555-0121"]}, "183": {"country": "Sao Tome and Pr\u00edncipe", "phones": ["+1-202-555-0137", "+1-202-555-0114", "+1-202-555-0141", "+1-202-555-0103", "+1-202-555-0185", "+1-202-555-0102"]}, "184": {"country": "Saudi Arabia", "phones": ["+1-202-555-0102", "+1-202-555-0152", "+1-202-555-0192", "+1-202-555-0158", "+1-202-555-0138", "+1-202-555-0136"]}, "185": {"country": "Senegal", "phones": ["+221 76 780 7607", "+221 76 143 0017", "+221 76 712 4194", "+221 76 219 4838", "+221 76 287 9997", "+221 76 452 7284"]}, "186": {"country": "Serbia", "phones": ["+381 61 772 8153", "+381 61 746 3531", "+381 61 405 5292", "+381 61 763 3622", "+381 61 428 2903", "+381 61 327 0073"]}, "187": {"country": "Seychelles", "phones": ["+248 758 2487", "+248 752 8362", "+248 448 0107", "+248 642 0089", "+248 431 6464", "+248 167 6320"]}, "188": {"country": "Sierra Leone", "phones": ["+1-202-555-0147", "+1-202-555-0115", "+1-202-555-0167", "+1-202-555-0140", "+1-202-555-0132", "+1-202-555-0184"]}, "189": {"country": "Singapore", "phones": ["+65 singapore 032 3973", "+65 singapore 620 4959", "+65 singapore 765 4174", "+65 singapore 567 0441", "+65 singapore 397 5026", "+65 singapore 217 3438"]}, "190": {"country": "Saint Eustatius", "phones": ["+1-202-555-0191", "+1-202-555-0119", "+1-202-555-0132", "+1-202-555-0154", "+1-202-555-0179", "+1-202-555-0123"]}, "191": {"country": "Sint Maarten", "phones": ["+1-202-555-0112", "+1-202-555-0111", "+1-202-555-0136", "+1-202-555-0168", "+1-202-555-0139", "+1-202-555-0135"]}, "192": {"country": "Slovakia", "phones": ["+421 90 714 7986", "+421 90 828 8642", "+421 90 753 0019", "+421 90 756 5049", "+421 90 938 6742", "+421 90 638 7697"]}, "193": {"country": "Solomon Islands", "phones": ["+1-202-555-0147", "+1-202-555-0108", "+1-202-555-0166", "+1-202-555-0147", "+1-202-555-0160", "+1-202-555-0116"]}, "194": {"country": "Somalia", "phones": ["+252 61 975 6578", "+252 61 892 1938", "+252 61 400 9399", "+252 61 848 7230", "+252 61 412 3751", "+252 61 698 9797"]}, "195": {"country": "South Africa", "phones": ["+1-202-555-0151", "+1-202-555-0183", "+1-202-555-0139", "+1-202-555-0112", "+1-202-555-0176", "+1-202-555-0101"]}, "196": {"country": "South Korea", "phones": ["+1-202-555-0115", "+1-202-555-0109", "+1-202-555-0150", "+1-202-555-0175", "+1-202-555-0111", "+1-202-555-0197"]}, "197": {"country": "South Sudan", "phones": ["+1-202-555-0103", "+1-202-555-0145", "+1-202-555-0164", "+1-202-555-0198", "+1-202-555-0122", "+1-202-555-0138"]}, "198": {"country": "Spain", "phones": ["+34 551 8099", "+34 161 5192", "+34 628 5398", "+34 764 0241", "+34 549 2177", "+34 563 9868"]}, "199": {"country": "Sri Lanka", "phones": ["+1-202-555-0150", "+1-202-555-0157", "+1-202-555-0192", "+1-202-555-0122", "+1-202-555-0118", "+1-202-555-0107"]}, "200": {"country": "Sudan", "phones": ["+249 12 227 2708", "+249 12 222 9759", "+249 12 498 3914", "+249 12 760 7918", "+249 12 626 5269", "+249 12 447 8402"]}, "201": {"country": "Suriname", "phones": ["+597 suriname 243 9856", "+597 suriname 640 9975", "+597 suriname 881 4815", "+597 suriname 738 7921", "+597 suriname 288 6843", "+597 suriname 696 4479"]}, "202": {"country": "Swaziland", "phones": ["+268 2 813 3832", "+268 2 935 7086", "+268 2 137 7440", "+268 2 967 5592", "+268 2 337 9571", "+268 2 026 2717"]}, "203": {"country": "Sweden", "phones": ["+46 16 461 4315", "+46 16 457 9383", "+46 16 867 0423", "+46 16 209 6993", "+46 16 943 5219", "+46 16 198 7473"]}, "204": {"country": "Switzerland", "phones": ["+41 33 073 4678", "+41 33 422 3475", "+41 33 016 7410", "+41 33 543 3613", "+41 33 251 6899", "+41 33 603 9163"]}, "205": {"country": "Syria", "phones": ["+963 33 066 8792", "+963 33 247 7189", "+963 33 670 8069", "+963 33 812 2843", "+963 33 771 2592", "+963 33 209 2557"]}, "206": {"country": "Taiwan", "phones": ["+886 taiwan4 863 7446", "+886 taiwan4 259 0707", "+886 taiwan4 055 4702", "+886 taiwan4 431 7175", "+886 taiwan4 923 0122", "+886 taiwan4 384 1679"]}, "207": {"country": "Tajikistan", "phones": ["+992 32 163 7999", "+992 32 646 9767", "+992 32 917 5892", "+992 32 361 5689", "+992 32 898 9750", "+992 32 480 3781"]}, "208": {"country": "Tanzania", "phones": ["+255 75 882 0696", "+255 75 604 4565", "+255 75 661 6733", "+255 75 620 6099", "+255 75 476 0572", "+255 75 087 6576"]}, "209": {"country": "Thailand", "phones": ["+66 2 752 5773", "+66 2 850 0850", "+66 2 830 0927", "+66 2 708 8868", "+66 2 913 6692", "+66 2 338 2288"]}, "210": {"country": "Togolese Republic", "phones": ["+1-202-555-0132", "+1-202-555-0149", "+1-202-555-0183", "+1-202-555-0126", "+1-202-555-0138", "+1-202-555-0107"]}, "211": {"country": "Tonga", "phones": ["+676 471 0398", "+676 083 6016", "+676 320 2802", "+676 675 2136", "+676 013 0270", "+676 894 9839"]}, "212": {"country": "Trinidad and Tobago", "phones": ["+1-202-555-0191", "+1-202-555-0199", "+1-202-555-0143", "+1-202-555-0182", "+1-202-555-0125", "+1-202-555-0125"]}, "213": {"country": "Tunisia", "phones": ["+216 tunisia 257 0770", "+216 tunisia 002 2343", "+216 tunisia 120 6141", "+216 tunisia 448 2262", "+216 tunisia 494 4015", "+216 tunisia 314 4549"]}, "214": {"country": "Turkey", "phones": ["+90 242 989 6782", "+90 242 897 2613", "+90 242 684 5041", "+90 242 010 6787", "+90 242 203 2766", "+90 242 381 1364"]}, "215": {"country": "Turkmenistan", "phones": ["+993 turkmenistan12 390 1398", "+993 turkmenistan12 111 0799", "+993 turkmenistan12 861 4561", "+993 turkmenistan12 641 8547", "+993 turkmenistan12 643 4636", "+993 turkmenistan12 952 9839"]}, "216": {"country": "Turks and Caicos Islands", "phones": ["+1-202-555-0185", "+1-202-555-0123", "+1-202-555-0138", "+1-202-555-0132", "+1-202-555-0120", "+1-202-555-0149"]}, "217": {"country": "Tuvalu", "phones": ["+688 tuvalu 449 7688", "+688 tuvalu 269 7131", "+688 tuvalu 641 7660", "+688 tuvalu 995 1381", "+688 tuvalu 203 2727", "+688 tuvalu 397 6722"]}, "218": {"country": "Uganda", "phones": ["+256 uganda751 690 2947", "+256 uganda751 805 0146", "+256 uganda751 130 9437", "+256 uganda751 294 5331", "+256 uganda751 075 6592", "+256 uganda751 235 2067"]}, "219": {"country": "Ukraine", "phones": ["+380 44 364 3651", "+380 44 929 2539", "+380 44 860 4370", "+380 44 053 6289", "+380 44 552 6380", "+380 44 788 4636"]}, "220": {"country": "United Arab Emirates", "phones": ["+1-202-555-0168", "+1-202-555-0100", "+1-202-555-0134", "+1-202-555-0186", "+1-202-555-0141", "+1-202-555-0198"]}, "221": {"country": "United Kingdom", "phones": ["+1-202-555-0177", "+1-202-555-0123", "+1-202-555-0150", "+1-202-555-0149", "+1-202-555-0118", "+1-202-555-0192"]}, "222": {"country": "United States", "phones": ["+1-202-555-0129", "+1-202-555-0149", "+1-202-555-0159", "+1-202-555-0196", "+1-202-555-0196", "+1-202-555-0184"]}, "223": {"country": "US Virgin Islands", "phones": ["+1-202-555-0171", "+1-202-555-0128", "+1-202-555-0101", "+1-202-555-0109", "+1-202-555-0181", "+1-202-555-0137"]}, "224": {"country": "Uruguay", "phones": ["+598 uruguay 547 0764", "+598 uruguay 431 8788", "+598 uruguay 054 2669", "+598 uruguay 864 9739", "+598 uruguay 053 1460", "+598 uruguay 500 9937"]}, "225": {"country": "Uzbekistan", "phones": ["+998 99 653 3360", "+998 99 199 7790", "+998 99 381 5016", "+998 99 963 9743", "+998 99 261 8378", "+998 99 313 0800"]}, "226": {"country": "Vanuatu", "phones": ["+678 vanuatu 964 2029", "+678 vanuatu 456 0857", "+678 vanuatu 648 7705", "+678 vanuatu 856 8918", "+678 vanuatu 608 8810", "+678 vanuatu 716 6282"]}, "227": {"country": "Venezuela", "phones": ["+58 212 654 8139", "+58 212 845 8335", "+58 212 125 6441", "+58 212 084 3554", "+58 212 435 5076", "+58 212 179 0033"]}, "228": {"country": "Vietnam", "phones": ["+84 121 959 1772", "+84 121 181 8538", "+84 121 205 3590", "+84 121 349 1052", "+84 121 526 9264", "+84 121 648 6654"]}, "229": {"country": "Wallis and Futuna", "phones": ["+1-202-555-0182", "+1-202-555-0164", "+1-202-555-0191", "+1-202-555-0194", "+1-202-555-0152", "+1-202-555-0167"]}, "230": {"country": "Yemen", "phones": ["+967 yemen5 132 5430", "+967 yemen5 034 4476", "+967 yemen5 096 8275", "+967 yemen5 230 7222", "+967 yemen5 074 0897", "+967 yemen5 300 4936"]}, "231": {"country": "Zambia", "phones": ["+260 95 972 4869", "+260 95 058 9311", "+260 95 773 2698", "+260 95 924 8508", "+260 95 244 4411", "+260 95 985 1879"]}, "232": {"country": "Zimbabwe", "phones": ["+263 78 466 2256", "+263 78 682 2352", "+263 78 361 5514", "+263 78 621 8870", "+263 78 356 8679", "+263 78 848 0710"]}}}




export const  getPhoneNumbers = (location) => {
    let numbers  = phones['_default']
    let data ;
    for ( let x  in numbers ){
        //  (numbers[x.toString()])
        if (numbers[x.toString()]["country"] === location){
            data = numbers[x].phones
            
        }
    }


    if( data ){
        return data
    }else{
        return false
    }


} 