module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_wZuuqxDxLchsaoocDst0ixcDm8sg/WsMuJWui6e",
        apiToken: "pI0ZuFwY5GmaYPo24uqtxeRK",
        appFilter: "yassine-strapi2",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },    
});