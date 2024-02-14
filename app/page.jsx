import ClientAboutView from "@/components/client/about";
import ClientContactView from "@/components/client/contact";
import ClientExperienceAndEducationView from "@/components/client/experience";
import ClientHomeView from "@/components/client/home";
import ClientProjectView from "@/components/client/project";

async function extractAllDatas(currentSection) {
  const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data =  res.json();

  return data && data.data;
}


export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    
    <div>
      <ClientHomeView data={homeSectionData} />

      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />

      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />

      <ClientProjectView data={projectSectionData} />

      <ClientContactView />
    </div>
    
  );
}