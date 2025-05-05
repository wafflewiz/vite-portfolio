export default function CSharpProject() {
    return (
      <div>
        <h2>C# Project</h2>
        <p>This project features an MVC web app with Razor Pages and Entity Framework.</p>
        <img src="/assets/csharp-project.png" alt="C# Project Screenshot" style={{ maxWidth: '100%' }} />
        <pre>{`public class HelloWorld {
    public static void Main() {
      Console.WriteLine("Hello from C# project!");
    }
  }`}</pre>
      </div>
    );
  }