using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CarSell.Migrations
{
    public partial class mig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ArabaMarkalar",
                columns: table => new
                {
                    markaId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    markaAd = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArabaMarkalar", x => x.markaId);
                });

            migrationBuilder.CreateTable(
                name: "ArabaRenkler",
                columns: table => new
                {
                    renkId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    renkAd = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArabaRenkler", x => x.renkId);
                });

            migrationBuilder.CreateTable(
                name: "ArabaYakitlar",
                columns: table => new
                {
                    yakitId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    yakitAd = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArabaYakitlar", x => x.yakitId);
                });

            migrationBuilder.CreateTable(
                name: "Musteriler",
                columns: table => new
                {
                    musteriId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    musteriAd = table.Column<string>(nullable: true),
                    musteriSoyad = table.Column<string>(nullable: true),
                    eMail = table.Column<string>(nullable: true),
                    musteriTelNo = table.Column<int>(nullable: false),
                    kullaniciAdi = table.Column<string>(nullable: true),
                    kullaniciSifresi = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Musteriler", x => x.musteriId);
                });

            migrationBuilder.CreateTable(
                name: "Sehirler",
                columns: table => new
                {
                    sehirId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    sehirAd = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sehirler", x => x.sehirId);
                });

            migrationBuilder.CreateTable(
                name: "Arabalar",
                columns: table => new
                {
                    arabaId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    arabaYili = table.Column<int>(nullable: false),
                    arabaKm = table.Column<int>(nullable: false),
                    aciklama = table.Column<string>(nullable: true),
                    arabaFiyat = table.Column<decimal>(nullable: false),
                    arabaUrl = table.Column<string>(nullable: true),
                    musteriId = table.Column<int>(nullable: false),
                    markaId = table.Column<int>(nullable: false),
                    renkId = table.Column<int>(nullable: false),
                    yakitId = table.Column<int>(nullable: false),
                    sehirId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arabalar", x => x.arabaId);
                    table.ForeignKey(
                        name: "FK_Arabalar_ArabaMarkalar_markaId",
                        column: x => x.markaId,
                        principalTable: "ArabaMarkalar",
                        principalColumn: "markaId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Arabalar_Musteriler_musteriId",
                        column: x => x.musteriId,
                        principalTable: "Musteriler",
                        principalColumn: "musteriId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Arabalar_ArabaRenkler_renkId",
                        column: x => x.renkId,
                        principalTable: "ArabaRenkler",
                        principalColumn: "renkId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Arabalar_Sehirler_sehirId",
                        column: x => x.sehirId,
                        principalTable: "Sehirler",
                        principalColumn: "sehirId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Arabalar_ArabaYakitlar_yakitId",
                        column: x => x.yakitId,
                        principalTable: "ArabaYakitlar",
                        principalColumn: "yakitId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Arabalar_markaId",
                table: "Arabalar",
                column: "markaId");

            migrationBuilder.CreateIndex(
                name: "IX_Arabalar_musteriId",
                table: "Arabalar",
                column: "musteriId");

            migrationBuilder.CreateIndex(
                name: "IX_Arabalar_renkId",
                table: "Arabalar",
                column: "renkId");

            migrationBuilder.CreateIndex(
                name: "IX_Arabalar_sehirId",
                table: "Arabalar",
                column: "sehirId");

            migrationBuilder.CreateIndex(
                name: "IX_Arabalar_yakitId",
                table: "Arabalar",
                column: "yakitId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Arabalar");

            migrationBuilder.DropTable(
                name: "ArabaMarkalar");

            migrationBuilder.DropTable(
                name: "Musteriler");

            migrationBuilder.DropTable(
                name: "ArabaRenkler");

            migrationBuilder.DropTable(
                name: "Sehirler");

            migrationBuilder.DropTable(
                name: "ArabaYakitlar");
        }
    }
}
