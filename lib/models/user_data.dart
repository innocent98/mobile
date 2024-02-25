import 'dart:convert';

import 'package:flutter/widgets.dart';
import 'package:zealworkers_token/screens/home/mining/mining.dart';

UserData tagsFromJson(String str) => UserData.fromJson(json.decode(str));

String tagsToJson(UserData data) => json.encode(data.toJson());

class UserData {
  List<UserData>? team;
  double? referralBonus;
  String? id;
  String? email;
  DateTime? createdAt;
  DateTime? updatedAt;
  int? v;
  bool? isEmailVerified;
  DateTime? miningExp;
  bool? mining;
  double? earning;
  double? totalEarned;
  DateTime? nextMine;
  String? success;
  String? fullName;
  String? referralCode;

  UserData({
    this.team,
    this.referralBonus,
    this.id,
    this.email,
    this.createdAt,
    this.updatedAt,
    this.v,
    this.isEmailVerified,
    this.miningExp,
    this.mining,
    this.earning,
    this.totalEarned,
    this.nextMine,
    this.success,
    this.fullName,
    this.referralCode,
  });

  factory UserData.fromJson(Map<String, dynamic> json) {
    return UserData(
      team: json["team"] != null
          ? List<UserData>.from(
              (json["team"] as List).map((x) => UserData.fromJson(x)))
          : null,
      referralBonus: json["referralBonus"] != null
          ? (json["referralBonus"] as num?)?.toDouble() ?? 0.0
          : 0.0,
      id: json["_id"] != null ? json["_id"] as String : "",
      email: json["email"] != null ? json["email"] as String : "",
      createdAt: json["createdAt"] != null
          ? DateTime.tryParse(json["createdAt"]) ?? DateTime(0)
          : DateTime(0),
      updatedAt: json["updatedAt"] != null
          ? DateTime.tryParse(json["updatedAt"]) ?? DateTime(0)
          : DateTime(0),
      v: json["__v"] != null ? json["__v"] as int : 0,
      isEmailVerified: json["isEmailVerified"] != null
          ? json["isEmailVerified"] as bool
          : false,
      miningExp: json["miningExp"] != null
          ? DateTime.tryParse(json["miningExp"]) ?? DateTime(0)
          : DateTime(0),
      mining: json["mining"] != null ? json["mining"] as bool : false,
      earning: json["earning"] != null
          ? (json["earning"] as num?)?.toDouble() ?? 0.0
          : 0.0,
      totalEarned: json["totalEarned"] != null
          ? (json["totalEarned"] as num?)?.toDouble() ?? 0.0
          : 0.0,
      nextMine: json["nextMine"] != null
          ? DateTime.tryParse(json["nextMine"]) ?? DateTime(0)
          : DateTime(0),
      success: json["success"] != null ? json["success"] as String : "",
      fullName: json["fullName"] != null ? json["fullName"] as String : "",
      referralCode:
          json["referralCode"] != null ? json["referralCode"] as String : "",
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "team": team != null && team!.isNotEmpty
          ? List<dynamic>.from(team!.map((x) => x))
          : [],
      "referralBonus": referralBonus,
      "_id": id,
      "email": email,
      "createdAt": createdAt != null ? createdAt!.toIso8601String() : null,
      "updatedAt": updatedAt != null ? updatedAt!.toIso8601String() : null,
      "__v": v,
      "isEmailVerified": isEmailVerified,
      "miningExp": miningExp != null ? miningExp!.toIso8601String() : null,
      "mining": mining,
      "earning": earning,
      "totalEarned": totalEarned,
      "nextMine": nextMine != null ? nextMine!.toIso8601String() : null,
      "success": success,
      "fullName": fullName,
      "referralCode": referralCode,
    };
  }

  when(
      {required Mining Function(dynamic data) data,
      required Container Function(dynamic err, dynamic s) error,
      required Container Function() loading}) {}
}
