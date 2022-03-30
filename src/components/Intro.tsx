import { useState, useContext } from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components"
import theme from "../../styles/theme.js"
import ModeButton from "./ModeButton"

const Intro = (props: any) => {
      
    const [isLightMode, setLightMode] = useState(false);
    const onChangeHandler = () => {
        setLightMode(!isLightMode);
    }

    return(
        <ThemeProvider theme={theme}>
            <Container id={props.id} isLightMode={isLightMode}>
                <Stars />
                <Stars2 />
                <Stars3 />
                <IntroTextBox>
                    <Text>
                        <span>Hello.</span>
                        I'm Myungmin Lee <br/>
                        Web Front Developer
                    </Text>
                    <ModeButton onChange={onChangeHandler}/>
                </IntroTextBox>
                <CloudBox>
                    <Cloud>
                        <img src="/images/cloud_1.png" alt="구름 이미지"/>
                    </Cloud>
                    <Cloud2>
                        <img src="/images/cloud_2.png" alt="구름 이미지"/>
                    </Cloud2>
                    <Cloud3>
                        <img src="/images/cloud_3.png" alt="구름 이미지"/>
                    </Cloud3>
                </CloudBox>
            </Container>
        </ThemeProvider>
    )
}

export default Intro

const Container = styled.div<{isLightMode: boolean}>`
    width: 100%;
    height: 100vh;
    background: linear-gradient(#000000,#3b70b4);
    position: relative;
    overflow: hidden;

    ${props => props.isLightMode && css`
        background: linear-gradient(#a67c9d,#e88c75,#ffdcbe);
    `}
`

const IntroTextBox = styled.div`
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;

    @media ${({theme}) => theme.device.tabletL} {
        left: 0;
        padding-left: 24px;
    }
`

const Text = styled.h1`
    color: #fff;
    font-size: 30px;

    span {
        display: block;
        font-size: 40px;
        color: #fff;
    }
`

const animate_stars = keyframes`
    0% {
		transform: translateY(0)
	}
	to {
		transform: translateY(-2000px)
	}
`

const Stars = styled.div`
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1675px 3231px #fff, 790px 1236px #fff, 181px 1640px #fff, 1957px 1216px #fff, 1811px 1382px #fff, 1463px 1251px #fff, 104px 162px #fff, 737px 1913px #fff, 291px 1679px #fff, 642px 1449px #fff, 1585px 1457px #fff, 1396px 467px #fff, 184px 315px #fff, 870px 1272px #fff, 1913px 532px #fff, 1659px 426px #fff, 1567px 181px #fff, 1726px 1904px #fff, 1582px 675px #fff, 766px 281px #fff, 1800px 1736px #fff, 1485px 382px #fff, 1900px 827px #fff, 520px 1647px #fff, 1356px 584px #fff, 1479px 524px #fff, 415px 795px #fff, 1648px 1801px #fff, 1411px 744px #fff, 1311px 43px #fff, 1486px 430px #fff, 519px 637px #fff, 530px 1190px #fff, 886px 1217px #fff, 1520px 399px #fff, 1472px 1906px #fff, 273px 1435px #fff, 1747px 1446px #fff, 1468px 1049px #fff, 1972px 1432px #fff, 1095px 853px #fff, 1210px 1588px #fff, 1230px 778px #fff, 894px 1884px #fff, 814px 414px #fff, 548px 586px #fff, 1527px 900px #fff, 377px 1961px #fff, 227px 648px #fff, 533px 674px #fff, 994px 1456px #fff, 296px 370px #fff, 1299px 1188px #fff, 210px 1950px #fff, 990px 1347px #fff, 1094px 1553px #fff, 966px 1173px #fff, 669px 434px #fff, 462px 24px #fff, 1486px 1423px #fff, 1332px 735px #fff, 56px 1849px #fff, 526px 615px #fff, 1791px 1180px #fff, 1446px 56px #fff, 1836px 240px #fff, 1555px 501px #fff, 328px 1338px #fff, 1063px 1718px #fff, 292px 1362px #fff, 1434px 912px #fff, 447px 708px #fff, 1297px 881px #fff, 1653px 571px #fff, 300px 865px #fff, 1131px 218px #fff, 701px 1179px #fff, 1075px 1241px #fff, 60px 1377px #fff, 535px 813px #fff, 1259px 1522px #fff, 1758px 1061px #fff, 1203px 689px #fff, 1818px 302px #fff, 1622px 12px #fff, 826px 1496px #fff, 196px 468px #fff, 1077px 530px #fff, 1747px 1314px #fff, 1444px 619px #fff, 674px 1814px #fff, 191px 698px #fff, 968px 1502px #fff, 1320px 1790px #fff, 1906px 623px #fff, 390px 1003px #fff, 396px 1384px #fff, 1062px 300px #fff, 1560px 968px #fff, 847px 1960px #fff, 1315px 104px #fff, 1055px 1124px #fff, 1409px 1131px #fff, 332px 676px #fff, 863px 1464px #fff, 1043px 427px #fff, 1596px 450px #fff, 1829px 1684px #fff, 1065px 1687px #fff, 1967px 1108px #fff, 1250px 1279px #fff, 395px 1710px #fff, 233px 1997px #fff, 1688px 780px #fff, 395px 861px #fff, 1780px 996px #fff, 1403px 1441px #fff, 1790px 639px #fff, 1460px 519px #fff, 1570px 1234px #fff, 193px 760px #fff, 1320px 1322px #fff, 1734px 26px #fff, 1900px 598px #fff, 1937px 83px #fff, 1823px 770px #fff, 1500px 1540px #fff, 1382px 1178px #fff, 1193px 483px #fff, 1540px 1282px #fff, 722px 1609px #fff, 26px 1981px #fff, 34px 1194px #fff, 76px 212px #fff, 1109px 758px #fff, 1051px 325px #fff, 496px 1475px #fff, 922px 1098px #fff, 947px 543px #fff, 890px 1922px #fff, 1943px 644px #fff, 358px 490px #fff, 223px 950px #fff, 1437px 1524px #fff, 901px 333px #fff, 1881px 1942px #fff, 1172px 1566px #fff, 575px 1526px #fff, 1683px 199px #fff, 1692px 1541px #fff, 598px 900px #fff, 1910px 932px #fff, 1728px 492px #fff, 651px 232px #fff, 1430px 699px #fff, 1184px 813px #fff, 1986px 158px #fff, 771px 1499px #fff, 1832px 1049px #fff, 637px 142px #fff, 18px 1417px #fff, 695px 1018px #fff, 184px 1681px #fff, 735px 949px #fff, 1405px 1904px #fff, 207px 1278px #fff, 1083px 1033px #fff, 822px 593px #fff, 1611px 1414px #fff, 501px 1836px #fff, 1158px 306px #fff, 978px 1368px #fff, 774px 1341px #fff, 887px 1812px #fff, 1599px 988px #fff, 562px 464px #fff, 1406px 532px #fff, 1405px 1470px #fff, 554px 1830px #fff, 186px 950px #fff, 490px 1819px #fff, 1001px 1576px #fff, 995px 896px #fff, 456px 1320px #fff, 1032px 1814px #fff, 401px 1697px #fff, 1152px 1114px #fff, 1826px 766px #fff, 9px 1279px #fff, 487px 1411px #fff, 549px 57px #fff, 191px 1009px #fff, 1137px 1572px #fff, 924px 92px #fff, 835px 1324px #fff, 1251px 1159px #fff, 1033px 1058px #fff, 396px 858px #fff, 294px 518px #fff, 1701px 1506px #fff, 422px 286px #fff, 1128px 116px #fff, 568px 848px #fff, 1530px 1989px #fff, 674px 58px #fff, 525px 1369px #fff, 1505px 1526px #fff, 1908px 1944px #fff, 78px 196px #fff, 1627px 1398px #fff, 1917px 1566px #fff, 1079px 629px #fff, 671px 996px #fff, 878px 1370px #fff, 1980px 1889px #fff, 1866px 413px #fff, 1483px 525px #fff, 801px 1820px #fff, 96px 741px #fff, 482px 1131px #fff, 1475px 929px #fff, 1982px 1524px #fff, 1226px 1567px #fff, 336px 1796px #fff, 1543px 1177px #fff, 650px 1550px #fff, 1480px 947px #fff, 324px 1654px #fff, 1688px 1112px #fff, 1719px 1047px #fff, 462px 1323px #fff, 1750px 1094px #fff, 674px 1397px #fff, 1296px 234px #fff, 1119px 1579px #fff, 1865px 553px #fff, 382px 311px #fff, 57px 1846px #fff, 531px 1055px #fff, 718px 1743px #fff, 1015px 1156px #fff, 414px 1930px #fff, 949px 1280px #fff, 287px 1159px #fff, 1708px 955px #fff, 399px 230px #fff, 378px 1047px #fff, 108px 373px #fff, 85px 884px #fff, 1743px 1464px #fff;
    border-radius: 1px;
    animation: ${animate_stars} 100s linear infinite;

    &:after {
        content: " ";
        position: absolute;
        top: 100vh;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: 1675px 3231px #fff, 790px 1236px #fff, 181px 1640px #fff, 1957px 1216px #fff, 1811px 1382px #fff, 1463px 1251px #fff, 104px 162px #fff, 737px 1913px #fff, 291px 1679px #fff, 642px 1449px #fff, 1585px 1457px #fff, 1396px 467px #fff, 184px 315px #fff, 870px 1272px #fff, 1913px 532px #fff, 1659px 426px #fff, 1567px 181px #fff, 1726px 1904px #fff, 1582px 675px #fff, 766px 281px #fff, 1800px 1736px #fff, 1485px 382px #fff, 1900px 827px #fff, 520px 1647px #fff, 1356px 584px #fff, 1479px 524px #fff, 415px 795px #fff, 1648px 1801px #fff, 1411px 744px #fff, 1311px 43px #fff, 1486px 430px #fff, 519px 637px #fff, 530px 1190px #fff, 886px 1217px #fff, 1520px 399px #fff, 1472px 1906px #fff, 273px 1435px #fff, 1747px 1446px #fff, 1468px 1049px #fff, 1972px 1432px #fff, 1095px 853px #fff, 1210px 1588px #fff, 1230px 778px #fff, 894px 1884px #fff, 814px 414px #fff, 548px 586px #fff, 1527px 900px #fff, 377px 1961px #fff, 227px 648px #fff, 533px 674px #fff, 994px 1456px #fff, 296px 370px #fff, 1299px 1188px #fff, 210px 1950px #fff, 990px 1347px #fff, 1094px 1553px #fff, 966px 1173px #fff, 669px 434px #fff, 462px 24px #fff, 1486px 1423px #fff, 1332px 735px #fff, 56px 1849px #fff, 526px 615px #fff, 1791px 1180px #fff, 1446px 56px #fff, 1836px 240px #fff, 1555px 501px #fff, 328px 1338px #fff, 1063px 1718px #fff, 292px 1362px #fff, 1434px 912px #fff, 447px 708px #fff, 1297px 881px #fff, 1653px 571px #fff, 300px 865px #fff, 1131px 218px #fff, 701px 1179px #fff, 1075px 1241px #fff, 60px 1377px #fff, 535px 813px #fff, 1259px 1522px #fff, 1758px 1061px #fff, 1203px 689px #fff, 1818px 302px #fff, 1622px 12px #fff, 826px 1496px #fff, 196px 468px #fff, 1077px 530px #fff, 1747px 1314px #fff, 1444px 619px #fff, 674px 1814px #fff, 191px 698px #fff, 968px 1502px #fff, 1320px 1790px #fff, 1906px 623px #fff, 390px 1003px #fff, 396px 1384px #fff, 1062px 300px #fff, 1560px 968px #fff, 847px 1960px #fff, 1315px 104px #fff, 1055px 1124px #fff, 1409px 1131px #fff, 332px 676px #fff, 863px 1464px #fff, 1043px 427px #fff, 1596px 450px #fff, 1829px 1684px #fff, 1065px 1687px #fff, 1967px 1108px #fff, 1250px 1279px #fff, 395px 1710px #fff, 233px 1997px #fff, 1688px 780px #fff, 395px 861px #fff, 1780px 996px #fff, 1403px 1441px #fff, 1790px 639px #fff, 1460px 519px #fff, 1570px 1234px #fff, 193px 760px #fff, 1320px 1322px #fff, 1734px 26px #fff, 1900px 598px #fff, 1937px 83px #fff, 1823px 770px #fff, 1500px 1540px #fff, 1382px 1178px #fff, 1193px 483px #fff, 1540px 1282px #fff, 722px 1609px #fff, 26px 1981px #fff, 34px 1194px #fff, 76px 212px #fff, 1109px 758px #fff, 1051px 325px #fff, 496px 1475px #fff, 922px 1098px #fff, 947px 543px #fff, 890px 1922px #fff, 1943px 644px #fff, 358px 490px #fff, 223px 950px #fff, 1437px 1524px #fff, 901px 333px #fff, 1881px 1942px #fff, 1172px 1566px #fff, 575px 1526px #fff, 1683px 199px #fff, 1692px 1541px #fff, 598px 900px #fff, 1910px 932px #fff, 1728px 492px #fff, 651px 232px #fff, 1430px 699px #fff, 1184px 813px #fff, 1986px 158px #fff, 771px 1499px #fff, 1832px 1049px #fff, 637px 142px #fff, 18px 1417px #fff, 695px 1018px #fff, 184px 1681px #fff, 735px 949px #fff, 1405px 1904px #fff, 207px 1278px #fff, 1083px 1033px #fff, 822px 593px #fff, 1611px 1414px #fff, 501px 1836px #fff, 1158px 306px #fff, 978px 1368px #fff, 774px 1341px #fff, 887px 1812px #fff, 1599px 988px #fff, 562px 464px #fff, 1406px 532px #fff, 1405px 1470px #fff, 554px 1830px #fff, 186px 950px #fff, 490px 1819px #fff, 1001px 1576px #fff, 995px 896px #fff, 456px 1320px #fff, 1032px 1814px #fff, 401px 1697px #fff, 1152px 1114px #fff, 1826px 766px #fff, 9px 1279px #fff, 487px 1411px #fff, 549px 57px #fff, 191px 1009px #fff, 1137px 1572px #fff, 924px 92px #fff, 835px 1324px #fff, 1251px 1159px #fff, 1033px 1058px #fff, 396px 858px #fff, 294px 518px #fff, 1701px 1506px #fff, 422px 286px #fff, 1128px 116px #fff, 568px 848px #fff, 1530px 1989px #fff, 674px 58px #fff, 525px 1369px #fff, 1505px 1526px #fff, 1908px 1944px #fff, 78px 196px #fff, 1627px 1398px #fff, 1917px 1566px #fff, 1079px 629px #fff, 671px 996px #fff, 878px 1370px #fff, 1980px 1889px #fff, 1866px 413px #fff, 1483px 525px #fff, 801px 1820px #fff, 96px 741px #fff, 482px 1131px #fff, 1475px 929px #fff, 1982px 1524px #fff, 1226px 1567px #fff, 336px 1796px #fff, 1543px 1177px #fff, 650px 1550px #fff, 1480px 947px #fff, 324px 1654px #fff, 1688px 1112px #fff, 1719px 1047px #fff, 462px 1323px #fff, 1750px 1094px #fff, 674px 1397px #fff, 1296px 234px #fff, 1119px 1579px #fff, 1865px 553px #fff, 382px 311px #fff, 57px 1846px #fff, 531px 1055px #fff, 718px 1743px #fff, 1015px 1156px #fff, 414px 1930px #fff, 949px 1280px #fff, 287px 1159px #fff, 1708px 955px #fff, 399px 230px #fff, 378px 1047px #fff, 108px 373px #fff, 85px 884px #fff, 1743px 1464px #fff;
    }
`

const Stars2 = styled.div`
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1726px 5465px #fff, 1093px 1248px #fff, 1565px 1158px #fff, 1975px 579px #fff, 413px 1216px #fff, 969px 1750px #fff, 270px 1709px #fff, 1768px 534px #fff, 1258px 1354px #fff, 1736px 1235px #fff, 1441px 838px #fff, 1542px 956px #fff, 257px 1076px #fff, 1139px 1353px #fff, 264px 1144px #fff, 777px 1892px #fff, 431px 1535px #fff, 297px 1877px #fff, 1439px 1607px #fff, 1815px 45px #fff, 263px 857px #fff, 1483px 457px #fff, 817px 731px #fff, 116px 1743px #fff, 1235px 904px #fff, 251px 1302px #fff, 137px 565px #fff, 997px 593px #fff, 1035px 1387px #fff, 151px 448px #fff, 1404px 1716px #fff, 505px 1686px #fff, 1315px 918px #fff, 367px 143px #fff, 965px 549px #fff, 999px 409px #fff, 1840px 203px #fff, 1835px 619px #fff, 1914px 1529px #fff, 1443px 1403px #fff, 1945px 455px #fff, 211px 459px #fff, 1832px 67px #fff, 1419px 1878px #fff, 255px 1995px #fff, 1378px 43px #fff, 1939px 1430px #fff, 1831px 1345px #fff, 71px 433px #fff, 121px 706px #fff, 469px 1633px #fff, 151px 1538px #fff, 1990px 151px #fff, 467px 394px #fff, 1990px 365px #fff, 1796px 1607px #fff, 568px 1486px #fff, 656px 1145px #fff, 1042px 1913px #fff, 957px 783px #fff, 332px 486px #fff, 677px 1720px #fff, 1356px 1218px #fff, 1939px 1240px #fff, 1213px 800px #fff, 811px 1718px #fff, 1752px 1017px #fff, 10px 144px #fff, 1127px 822px #fff, 251px 90px #fff, 1841px 1956px #fff, 1316px 1549px #fff, 1069px 1625px #fff, 1490px 106px #fff, 1226px 278px #fff, 1578px 1469px #fff, 719px 644px #fff, 4px 671px #fff, 1632px 1746px #fff, 1503px 153px #fff;
    border-radius: 2px;
    animation: ${animate_stars} 150s linear infinite;

    &:after {
        content: " ";
        position: absolute;
        top: 100vh;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: 1726px 5465px #fff, 1093px 1248px #fff, 1565px 1158px #fff, 1975px 579px #fff, 413px 1216px #fff, 969px 1750px #fff, 270px 1709px #fff, 1768px 534px #fff, 1258px 1354px #fff, 1736px 1235px #fff, 1441px 838px #fff, 1542px 956px #fff, 257px 1076px #fff, 1139px 1353px #fff, 264px 1144px #fff, 777px 1892px #fff, 431px 1535px #fff, 297px 1877px #fff, 1439px 1607px #fff, 1815px 45px #fff, 263px 857px #fff, 1483px 457px #fff, 817px 731px #fff, 116px 1743px #fff, 1235px 904px #fff, 251px 1302px #fff, 137px 565px #fff, 997px 593px #fff, 1035px 1387px #fff, 151px 448px #fff, 1404px 1716px #fff, 505px 1686px #fff, 1315px 918px #fff, 367px 143px #fff, 965px 549px #fff, 999px 409px #fff, 1840px 203px #fff, 1835px 619px #fff, 1914px 1529px #fff, 1443px 1403px #fff, 1945px 455px #fff, 211px 459px #fff, 1832px 67px #fff, 1419px 1878px #fff, 255px 1995px #fff, 1378px 43px #fff, 1939px 1430px #fff, 1831px 1345px #fff, 71px 433px #fff, 121px 706px #fff, 469px 1633px #fff, 151px 1538px #fff, 1990px 151px #fff, 467px 394px #fff, 1990px 365px #fff, 1796px 1607px #fff, 568px 1486px #fff, 656px 1145px #fff, 1042px 1913px #fff, 957px 783px #fff, 332px 486px #fff, 677px 1720px #fff, 1356px 1218px #fff, 1939px 1240px #fff, 1213px 800px #fff, 811px 1718px #fff, 1752px 1017px #fff, 10px 144px #fff, 1127px 822px #fff, 251px 90px #fff, 1841px 1956px #fff, 1316px 1549px #fff, 1069px 1625px #fff, 1490px 106px #fff, 1226px 278px #fff, 1578px 1469px #fff, 719px 644px #fff, 4px 671px #fff, 1632px 1746px #fff, 1503px 153px #fff;
    }
`

const Stars3 = styled.div`
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 1163px 2434px #fff, 1592px 1860px #fff, 1177px 1533px #fff, 872px 1840px #fff, 179px 1536px #fff, 648px 1281px #fff, 1674px 1586px #fff, 370px 836px #fff, 1902px 1638px #fff, 1268px 196px #fff;
    border-radius: 3px;
    animation: ${animate_stars} 200s linear infinite;

    &:after {
        content: " ";
        position: absolute;
        top: 100vh;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: 1163px 2434px #fff, 1592px 1860px #fff, 1177px 1533px #fff, 872px 1840px #fff, 179px 1536px #fff, 648px 1281px #fff, 1674px 1586px #fff, 370px 836px #fff, 1902px 1638px #fff, 1268px 196px #fff;
        border-radius: 3px;
    }
`

const CloudBox = styled.div`
    width: 100%;
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: hidden;
`

const Cloud = styled.div`
    z-index: 3;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -100px;

    @media ${({theme}) => theme.device.tabletL} {
        width: 1400px;
        min-width: 1400px;
    }
`

const Cloud2 = styled.div`
    z-index: 2;
    position: absolute;
    left: -500px;
    bottom: -100px;

    @media ${({theme}) => theme.device.tabletL} {
        width: 1400px;
        min-width: 1400px;
    }
`

const Cloud3 = styled.div`
    z-index: 1;
    position: absolute;
    right: -400px;
    bottom: -150px;

    @media ${({theme}) => theme.device.tabletL} {
        width: 1400px;
        min-width: 1400px;
    }
`