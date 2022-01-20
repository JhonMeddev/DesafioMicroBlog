# DesafioMicroBlog


# Api utilizando Java , Spring Boot e  MySql

Detalhes de implementação:

1. Java versão 11 pom.xml

   ```xml
   	<properties>
   		<java.version>11</java.version>
   	</properties>
   ```

2. Banco de dados relacional MySql

   ```XML
   		<dependency>
   			<groupId>mysql</groupId>
   			<artifactId>mysql-connector-java</artifactId>
   			<scope>runtime</scope>
   		</dependency>
   ```

3. Api documentada com Swagger:

   Endpoints no swagger através do link: http://localhost:8080/swagger-ui/

   <div align="center"><img src="https://media.discordapp.net/attachments/900415954234773506/933084634416287804/Captura_de_tela_de_2022-01-18_16-44-45.png?width=1179&height=663" title="insomnia" /></div>

4. Endpoint /listagem paginado:

   <div align="center"><img src="https://media.discordapp.net/attachments/900415954234773506/933541031096504370/capturadetela.png?width=1212&height=663" title="swagger" /></div>
