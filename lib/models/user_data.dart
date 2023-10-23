import 'dart:convert';

UserData tagsFromJson(String str) => UserData.fromJson(json.decode(str));

String tagsToJson(UserData data) => json.encode(data.toJson());

class UserData {
  List<dynamic> team;
  int referralBonus;
  String id;
  String email;
  DateTime createdAt;
  DateTime updatedAt;
  int v;
  bool isEmailVerified;
  DateTime miningExp;
  bool mining;
  double earning;
  double totalEarned;
  DateTime nextMine;
  String success;

  UserData({
    required this.team,
    required this.referralBonus,
    required this.id,
    required this.email,
    required this.createdAt,
    required this.updatedAt,
    required this.v,
    required this.isEmailVerified,
    required this.miningExp,
    required this.mining,
    required this.earning,
    required this.totalEarned,
    required this.nextMine,
    required this.success,
  });

  factory UserData.fromJson(Map<String, dynamic> json) {
    return UserData(
      team: List<dynamic>.from(json["team"] ?? []),
      referralBonus: json["referralBonus"] ?? 0,
      id: json["_id"] ?? "",
      email: json["email"] ?? "",
      createdAt: DateTime.tryParse(json["createdAt"]) ?? DateTime(0),
      updatedAt: DateTime.tryParse(json["updatedAt"]) ?? DateTime(0),
      v: json["__v"] ?? 0,
      isEmailVerified: json["isEmailVerified"] ?? false,
      miningExp: DateTime.tryParse(json["miningExp"]) ?? DateTime(0),
      mining: json["mining"] ?? false,
      earning: (json["earning"] as num?)?.toDouble() ?? 0.0,
      totalEarned: (json["totalEarned"] as num?)?.toDouble() ?? 0.0,
      nextMine: DateTime.tryParse(json["nextMine"]) ?? DateTime(0),
      success: json["success"] ?? "",
    );
  }

  Map<String, dynamic> toJson() => {
        "team": team.isNotEmpty ? List<dynamic>.from(team.map((x) => x)) : [],
        "referralBonus": referralBonus,
        "_id": id,
        "email": email,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
        "isEmailVerified": isEmailVerified,
        "miningExp": miningExp.toIso8601String(),
        "mining": mining,
        "earning": earning,
        "totalEarned": totalEarned,
        "nextMine": nextMine.toIso8601String(),
        "success": success,
      };
}
