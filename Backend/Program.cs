

using Microsoft.EntityFrameworkCore;
using A2.Data;
using Microsoft.AspNetCore.Authentication.OAuth;
using A2.Handler;
using A2.Data;
using Microsoft.AspNetCore.Authentication;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services
.AddAuthentication()
    .AddScheme<AuthenticationSchemeOptions, A2AuthHandler>("MyAuthentication", null);


builder.Services.AddDbContext<A2DBContext>(
    options => options.UseSqlite(builder.Configuration["AuthDbConnection"])
);
builder.Services.AddControllers();
builder.Services.AddScoped<IA2Repo, A2Repo>();
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("UserOnly", policy => policy.RequireClaim("userName"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();
