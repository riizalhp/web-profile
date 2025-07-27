import Image from 'next/image';

export default function ToolsSection() {
  const tools = [
    {
      name: "Design Tool 1",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCplRx7VW9UjjczX_DbDB-f2SYj4hr2eW-WQ6-494tdaXZgC7jK-HvOXsj06jKQNsM4WNsNIqjTgTAh7_y19zl1trf28r13ujn2ydkK6bnKEAVJkzrjJ1kRdwfdvMIY88GHhaXvksTBb2h3sgbEqLBnVZ92cQhR4JaTp10Cp4aHAw9qcL5v4xndTUgmVrjFpcWOPzGmMxzekWSSOM96WM5T8PoLZWVkIzOycrvXn_O0FaiM61r6eTDlDF5wVKqYskhs31egkqVA_vrW"
    },
    {
      name: "Design Tool 2", 
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCbTenv0Ub9ZWKsmydjB57WL_ob8QiTA8dXfoRCF5zWOqrsuYtL7bPCPX42unrHHCuFrZQWE6AEC7U4Wb-2bQ26Mq6kVI83nCR63ooAlALAu-PlnKPh61szepgc7nV_du1qDTTAnwrxc6lfHGG2UPwy6MkdQ7Blqk9Jn45n6eE_9sN1lb176ZevDptxvL20GnuF-Y2Zl8AGgTtqBq6jzaLrOG6Opw0cMGtyo92qaNRYtmXkLNO4HVFR86RD8V48nf57akiPZ2O7yY3"
    },
    {
      name: "Design Tool 3",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0aAH8R2lyIih7ed7zxurkqoPSrRfoDzs1KH2_aHL2f5Fm0VkwO6HT5pwm3nX6QaVtFYxGsHaLMUObhBRQXM2GZvZHHXzEiyr4epGKsiacT-PKKzvqKsrJixVQEQ0wFoLtHlTW1BUa3p4QI6upC5zm3jnygKP60h6E4ixE4AxHTm61tHYzLeU-rLXyG0mM_EyVL32nMzBEAGignW5alKhw71LjoYFjTcPojjU30tK-zNYQT1GxN1Gd0epFGgkRaU8DuRh-7wORSzOX"
    },
    {
      name: "Design Tool 4",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_VsJBLKKLMN-bE6jOJfSpI0BXkSf0kZPhN04nmFi3MfLJrrl4-vILZQqYl2dABfoyQ5VGZM_v9fd1glxnlmimMYz9Cn1zeNLA_FWCcjWz_nIbZMRS3Jsi0vfe72ykVPGP-cIni_bPsTO_fnIcST4OxBMQUIy6_1ZebXgN8nrdWnRw_-xraR34KQMmE7DpPoJQ8Mm16zs7Z41HcJc8U_IoCbuGLtl2KJ2jNtif7SJSTTNbRrG_6X_UVIR65mH7FkbuQpPGMibgpFX"
    },
    {
      name: "Design Tool 5",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCOXa8Ff7Qg9aJr4a93AH7vwxlRz5kTTLOenhTx6S1lo_qNEYxoPQKfp9WkKtRmBz3lmCpFqg9XHQK0Szk5ESBCB2871kAEoDELa9h-FRBwDqGrakB1bs_8mjoVx2qb_Y_hIl9FLA8I0lk6Z2JbYW0oIVaOTWpkuIcQkmYEbV-eDppWwb6ckG6zorR_8ZKm1JiuunXW-iRbwwb78azL-Erm3t2rDnjFPtRa6rd8QN4iCS_iPp1gB5yT0zs52knZjGYW20YXIAZkncd"
    }
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">Essential Stacks</h2>
      <p className="text-sm text-gray-400 mb-4">
        A Comprehensive Collection of Useful Tools to Support and Optimize My Workflow
      </p>
      <div className="flex space-x-3">
        {tools.map((tool, index) => (
          <div 
            key={index}
            className="hover:scale-110 transition-transform duration-200 cursor-pointer"
            title={tool.name}
          >
            <Image
              alt={`${tool.name} - Professional design tool used by Fatiha Eros Perdana`}
              className="w-10 h-10 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-shadow duration-200"
              src={tool.src}
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
}