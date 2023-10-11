import 'package:flutter/material.dart';
import 'package:zealworkers_token/screens/home/airdrop/airdrop.dart';
import 'package:zealworkers_token/screens/home/card/card.dart';
import 'package:zealworkers_token/screens/home/mining/mining.dart';
import 'package:zealworkers_token/widgets/drawer.dart';
import '../../constants/colors.dart' as app_color;

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      color: app_color.white,
      child: SafeArea(
        child: Scaffold(
            backgroundColor: app_color.primary_soft,
            appBar: AppBar(
              actions: [
                Padding(
                  padding: EdgeInsets.only(right: screenWidth * 0.035),
                  child: const Icon(Icons.notifications_outlined),
                )
              ],
            ),
            drawer: const MyDrawer(),
            body: Stack(children: [
              const Column(
                children: [AirdropInfo(), Mining()],
              ),
              Positioned(
                  top: screenHeight * 0.325,
                  left: screenWidth * 0.05,
                  child: const InfoCard()),
            ])),
      ),
    );
  }
}
